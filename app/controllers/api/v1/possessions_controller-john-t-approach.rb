# possessions_controller.rb
class Api::V1::PossessionsController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def show
    possession = Possession.find(params[:id])
    professionals = Professional.get_professionals(possession.name, possession.residence.zip_code, 4)
    manuals = Manual.get_manual_objects(possession.manufacturer, possession.model) #will need to shorten model number for kenmore at least
    Activity.create(action: "show", table: "possession", user: current_user, id_of_item: possession.id, name: possession.name)
    binding.pry # difference between possession_aws_image and manual_url?
    if (possession.room.residence.demo)
      render json: {
        # only real variables show up - but virtual variables are shown by using serializer below
        possession: PossessionShowSerializer.new(possession),
        professionals: professionals,
        manuals: manuals
      }
    elsif current_user && (current_user.role == "admin" || possession.room.residence == current_user.residence)
      render json: {
        # only real variables show up - but virtual variables are shown by using serializer below
        possession: PossessionShowSerializer.new(possession),
        professionals: professionals,
        manuals: manuals
      }
    else
      puts "not authorized to see possession "+params[:id]
    end
  end
  
  def index
    # used by news - most recent possessions
    Activity.create(action: "news", table: "possession", user: current_user, name: "multiple") # log the action
    possessions = Possession.where(:share_on_new_possession_list => true)
    possessions = possessions.sort_by{ |a| a[:updated_at] }.reverse
    leaders = Activity.leader_board
    possessions = possessions[0..6]
    render json: {possessions: possessions, leaders: leaders}
  end
  
  def create
    new_possession = Possession.new(possession_params)
    room = Room.find(params[:room_id])
    new_possession.room = room
    if new_possession.save
      
      theAction = Activity.new(action: "create", table: "possession", user: current_user, id_of_item: new_possession.id, name: new_possession.name)
      theAction.save
      
      render json: new_possession     
    else
      render json: { errors: new_possession.errors }
    end
  end

  def update  
    possession = Possession.find(params[:id])
    binding.pry
    possession.update_attributes(possession_params)
    
    Activity.create(action: "update", table: "possession", user: current_user, id_of_item: params[:id], name: params[:name]) # log the action

    render json: possession
  end

  def destroy
    possession = Possession.find(params[:id])
    room = possession.room
    possession.destroy
    Activity.create(action: "destroy", table: "possession", user: current_user, id_of_item: possession.id, name: possession.name)
    render json: {roomId: room.id}
  end

  private
    def possession_params
      params.require(:possession).permit(:id, :name, :manufacturer, :model,  :description, :URL, :operating_video, :warranty, :aws_image, :aws_owners_manual, :aws_warranty, :aws_purchase_receipt, :share_on_new_possession_list, :demo, :aws_tag)
      # params.permit([:id, :name, :manufacturer, :model,  :description, :URL, :operating_video, :warranty, :aws_image, :aws_owners_manual, :aws_warranty, :aws_purchase_receipt, :share_on_new_possession_list, :demo, :aws_tag])
    end

    def possession_aws_image_params
      params.permit([:aws_image])
    end

    def possession_aws_owners_manual_params
      params.permit([:aws_owners_manual])
    end

    def possession_aws_warranty_params
      params.permit([:aws_warranty])
    end

    def possession_aws_purchase_receipt_params
      params.permit([:aws_purchase_receipt])
    end
    
    def possession_aws_tag_params
      params.permit([:aws_tag])
    end

    def possession_params_no_aws
      params.permit([:id, :name, :manufacturer, :model, :description, :URL, :operating_video, :room_id, :share_on_new_possession_list])
    end

    def authenticate_user
      if !user_signed_in?
        render json: {error: ["You need to be signed in first"]}
      end
    end

    def serialized_data(data, serializer)
      ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer, scope: current_user)
    end
end
