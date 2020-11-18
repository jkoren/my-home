class Api::V1::RealtorsController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def show
    #binding.pry
    realtor = Realtor.find(params[:id])
    render json: realtor, serializer: RealtorShowSerializer
  end

  def index
    binding.pry
    realtors = Realtor.all
    render json: realtors, serializer: RealtorShowSerializer
  end
  
  def create
    new_realtor = Realtor.new(realtor_params)
    residence = Room.find(params[:residence_id])
    new_realtor.residence = residence
    if new_realtor.save
      render json: new_realtor
    else
      render json: { errors: new_realtor.errors }
    end
  end

  def update  
    realtor = Realtor.find(params[:id])
    realtor.update_attributes(realtor_params)
    render json: realtor
  end

  def destroy
    possession = Possession.find(params[:id])
    possession.destroy
  end

  private
    def realtor_params
      params.permit([:id, :name, :company, :image, :aws_image, :phone_number, :email, :URL])
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
