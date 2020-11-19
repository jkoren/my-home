# rooms_controller.rb
class Api::V1::RoomsController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]
  
  def show
    room = Room.find(params[:id])
    render json: room, serializer: RoomShowSerializer
  end

  # def index
  #   #for demo use http://localhost:3000/rooms/205 where 205 is room number
  #   rooms = residence.rooms
  #   render json: rooms
  # end

end
