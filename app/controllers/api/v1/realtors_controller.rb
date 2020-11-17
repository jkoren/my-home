class Api::V1::RealtorsController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def index
    realtors = Realtor.all.select{|realtor|realtor.residence == params[:id]}
    render json: realtors, serializer: RealtorShowSerializer
  end
  
  def show
    realtor = Realtor.find(params[:id])
    render json: realtor, serializer: RealtorShowSerializer
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
    realtor = Realtor.find(params[:id])
    room = realtor.residence
    realtor.destroy
    render json: {residenceId: residence.id}
  end

  private
    def realtor_params
      params.permit([:id, :name, :manufacturer, :model, :owners_manual, :description, :year_built, :purchased_from, :image, :purchase_date, :purchase_receipt, :purchase_price, :URL, :operating_video, :URL, :warranty, :aws_image])
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
