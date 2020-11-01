class Api::V1::RoomsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    rooms = Room.all
    render json: rooms
  end

  def show
    room = Room.find(params[:id])
    # render json: {
    #   room: serialized_data(movie, RoomSerializer),
    #   possessions: serialized_data(possession.reviews, PosessionSerializer)
    # }
  end

end
