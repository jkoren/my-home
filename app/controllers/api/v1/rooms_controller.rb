# rooms_controller.rb
class Api::V1::RoomsController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]
  
  def show
    room = Room.find(params[:id])
    render json: room, serializer: RoomShowSerializer

    # modified from group project:
    # render json: 
    # {
    #   room: serialized_data(room, RoomSerializer)
    #   possessions: serialized_data(possession.reviews, PosessionSerializer)
    # }
  end

  def index
    # binding.pry
    #for realtor demo, where showing multiple houses, will have to modify this
    residence = Residence.all.select{|residence|residence.name == "315 College Farm Rd #6"}.first
    rooms = residence.rooms
    render json: rooms
  end

end
