# rooms_controller.rb
class Api::V1::RoomsController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]
  
  def show
    room = Room.find(params[:id])
    render json: room, serializer: RoomShowSerializer
  end

  def index # for demo use only
    demo_residence = Residence.find_by(name: '315 College Farm Rd #6')
    rooms = demo_residence.rooms
    render json: rooms
  end

  def create
    new_room = Room.new(room_params) 
    residence = Residence.find(params[:residence_id])
    new_room.residence = residence
    if new_room.save
      render json: new_room
    else
      render json: { errors: new_room.errors }
    end
  end

  private
    def room_params
      params.permit([:id, :name, :description, :image, :aws_image, :residence_id])
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
