class Api::V1::RoomsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    rooms = Room.all
    render json: rooms
  end

  def show
    room = Room.find(params[:id])
    render json: {
      room: serialized_data(room, RoomSerializer),
      possessions: serialized_data(room.possessions, PossessionSerializer)
    }
  end

  def create
    new_room = Room.new(room_params)

    if new_room.save
      render json: new_room
    else
      render json: { errors: new_room.errors }
    end
  end

  private
    def room_params
      params.require(:room).permit([:name, :description, :image])
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
