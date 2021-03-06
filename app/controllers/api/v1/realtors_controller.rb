# realtors_controller.rb
class Api::V1::RealtorsController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def show
    realtor = Realtor.find(params[:id])
    render json: realtor, serializer: RealtorShowSerializer
  end

  def index
    realtors = Realtor.all
    render json: realtors, each_serializer: RealtorShowSerializer
  end
  
  # def create
  #   new_realtor = Realtor.new(realtor_params)
  #   residence = Room.find(params[:residence_id])
  #   new_realtor.residence = residence
  #   if new_realtor.save
  #     render json: new_realtor
  #   else
  #     render json: { errors: new_realtor.errors }
  #   end
  # end

  # def update  
  #   realtor = Realtor.find(params[:id])
  #   realtor.update_attributes(realtor_params)
  #   render json: realtor
  # end

  # def destroy
  #   possession = Possession.find(params[:id])
  #   possession.destroy
  # end

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
