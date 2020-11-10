class Api::V1::PossessionsController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def index
    possessions = Possession.all.select{|possession|possession.room == params[:id]}
    render json: possessions
  end
  
  def show
    possession = Possession.find(params[:id])
    render json: possession, serializer: PossessionShowSerializer
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

  private
    def possession_params
      params.require(:possession).permit([:id, :name, :manufacturer, :model, :owners_manual, :description, :year_built, :purchased_from, :image, :purchase_date, :purchase_receipt, :purchase_price, :URL, :operating_video, :URL, :warranty])
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
