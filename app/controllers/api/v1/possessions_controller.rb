# possessions_controller.rb
class Api::V1::PossessionsController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

# why is current user = nil? for update and create actions?

  def show
    
    possession = Possession.find(params[:id])
    UserAction.create(action: "show", table: "possession", user: current_user, id_of_item: possession.id, name: possession.name) # log the action
    render json: possession, serializer: PossessionShowSerializer
  end
  
  def index
    # used by news - most recent possessions
    UserAction.create(action: "index", table: "possession", user: current_user, name: "multiple") # log the action
    possessions = Possession.all.sort_by{ |a| a[:created_at] }.reverse
    possessions = possessions[0..6]
    render json: possessions, each_serializer: PossessionNewsSerializer
  end
  
  def create
    # binding.pry # why is current_user = nil?
    new_possession = Possession.new(possession_params)
    room = Room.find(params[:room_id])
    new_possession.room = room
    if new_possession.save
      # UserAction.create(action: "create", table: "possession", user: current_user, id_of_item: Possession.last.id, name: Possession.last.name)
      render json: new_possession     
    else
      render json: { errors: new_possession.errors }
    end
  end

  def update  
    # binding.pry # why is current_user = nil?
    possession = Possession.find(params[:id])

    # if the attachment does not come through correctly, it means that there is no new attachment, so do NOT update the aws_image field

    if params["aws_image"] != "[object Object]" 
      possession.update_attributes(possession_aws_image_params)
    end
    
    if params["aws_owners_manual"] != "[object Object]" 
      possession.update_attributes(possession_aws_owners_manual_params)
    end
    
    if params["aws_warranty"] != "[object Object]" 
      possession.update_attributes(possession_aws_warranty_params)
    end
    
    if params["aws_purchase_receipt"] != "[object Object]" 
      possession.update_attributes(possession_aws_purchase_receipt_params)
    end

    possession.update_attributes(possession_params_no_aws)

    # UserAction.create(action: "update", table: "possession", user: current_user, id_of_item: params[:id], name: params[:name]) # log the action

    render json: possession
  end

  def destroy
    possession = Possession.find(params[:id])
    room = possession.room
    possession.destroy
    UserAction.create(action: "destroy", table: "possession", user: current_user, id_of_item: possession.id, name: possession.name)
    render json: {roomId: room.id}
  end

  private
    def possession_params
      params.permit([:id, :name, :manufacturer, :model,  :description, :URL, :operating_video, :URL, :warranty, :aws_image, :aws_owners_manual, :aws_warranty, :aws_purchase_receipt])
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

    def possession_params_no_aws
      params.permit([:id, :name, :manufacturer, :model, :description, :purchase_receipt, :URL, :operating_video])
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
