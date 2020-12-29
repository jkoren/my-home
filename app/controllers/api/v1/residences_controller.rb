class Api::V1::ResidencesController < ApiController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def show
    residence = Residence.find(params[:id])
    if current_user && (current_user.role == "admin" || residence == current_user.residence)
      render json: residence, serializer: ResidenceShowSerializer
    else
      puts "not authorized to see residence "+params[:id] 
    end
  end
  
  def index
    if current_user.admin?
      residences = Residence.all
    else
      residences = []
      if current_user.residence != nil
        residences.push(current_user.residence)
      end
    end
    render json: residences, each_serializer: ResidenceShowSerializer
  end

  def create
    new_residence = Residence.new(residence_params)  
    realtor = Realtor.find_by(name: "My-Home") # if coming from realtor page - find(params[:realtor_id])
    new_residence.realtor = realtor
    current_user.residence = new_residence 
    if new_residence.save && current_user.save
      render json: new_residence
    else
      render json: { errors: new_residence.errors }
    end
  end


  def update  
    residence = Residence.find(params[:id])
    # if the attachment does not come through correctly, it means that there is no new attachment, so do NOT update the aws_image field

    if params["aws_image"] != "[object Object]" 
      residence.update_attributes(residence_params_aws_image)
    end

    residence.update_attributes(residence_params_no_aws_image)
    
    Activity.create(action: "update", table: "residence", user: current_user, id_of_item: params[:id], name: params[:name]) # log the action
    render json: residence
  end

  def destroy
    # possession = Residence.find(params[:id])
    # room = possession.room
    # possession.destroy
    # Activity.create(action: "destroy", table: "possession", user: current_user, id_of_item: possession.id, name: possession.name)
    # render json: {roomId: room.id}
  end

  private
    def residence_params
      params.permit([:id, :name, :street, :street2, :city, :state, :zip_code, :display_area, :note, :aws_image])
    end
    def residence_params_no_aws_image
      params.permit([:id, :name, :street, :street2, :city, :state, :zip_code, :display_area, :note])
    end
    def residence_params_aws_image
      params.permit([:aws_image])
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
