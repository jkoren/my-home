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

  private
    def residence_params
      params.permit([:id, :name, :street, :street2, :city, :state, :image, :aws_image, :zip_code, :note])
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
