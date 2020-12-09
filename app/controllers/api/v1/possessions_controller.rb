# possessions_controller.rb
class Api::V1::PossessionsController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def show
    possession = Possession.find(params[:id])
    render json: possession, serializer: PossessionShowSerializer
  end
  
  def index
    # used by newest possessions
    # possessions = Possession.all.select{|possession|possession.room == params[:id]}
    possessions = Possession.all.sort_by{ |a| a[:created_at] }.reverse
    possessions = possessions[0..4]
    render json: possessions, each_serializer: PossessionNewestSerializer
    # need to figure out how to limit only to room name, and include second level association to include residence.city and residence.state
  end
  
  def create
    new_possession = Possession.new(possession_params)
    room = Room.find(params[:room_id])
    new_possession.room = room
    if new_possession.save
      render json: new_possession 
    else
      render json: { errors: new_possession.errors }
    end
  end

  def update  
    possession = Possession.find(params[:id])

    # if the image does not come through correctly, it means that a new image has not been uploaded, so do NOT update the aws_image field

    # binding.pry 
    # this approach - would need to set up a different set of params for each combination of uploads
    # just aws_image
    # just aws_owners_manual
    # aws_image & aws_owners_manual
    # etc
    # not scalable

    if (params["aws_image"] == "[object Object]" || params["aws_owners_manual"] == "[object Object]" )
      params_to_update = update_possession_params_no_aws_image_or_owners_manual
    else
      params_to_update = possession_params
    end

    # params_to_update = (params["aws_image"] == "[object Object]" || params["aws_owners_manual"] == "[object Object]" )  ? update_possession_params_no_aws_image_or_owners_manual : possession_params

    possession.update_attributes(params_to_update)
    render json: possession
  end

  def destroy
    possession = Possession.find(params[:id])
    room = possession.room
    possession.destroy
    render json: {roomId: room.id}
  end

  private
    def possession_params
      params.permit([:id, :name, :manufacturer, :model, :owners_manual, :description, :year_built, :purchased_from, :image, :purchase_date, :purchase_receipt, :purchase_price, :URL, :operating_video, :URL, :warranty, :aws_image, :aws_owners_manual, :aws_warranty, :aws_purchase_receipt])
    end

    def update_possession_params_no_aws_image_or_owners_manual
      params.permit([:id, :name, :manufacturer, :model, :owners_manual, :description, :year_built, :purchased_from, :image, :purchase_date, :purchase_receipt, :purchase_price, :URL, :operating_video, :URL, :warranty])
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
