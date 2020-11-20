# rooms_controller.rb
class Api::V1::RoomsController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]
  
  def show
    room = Room.find(params[:id])
    render json: room, serializer: RoomShowSerializer
  end

  def index # for demo use only
    demo_residence = Residence.find_by(name: '315 College Farm Rd #6')
    rooms = demo_residence.rooms
    render json: rooms
  end

end
