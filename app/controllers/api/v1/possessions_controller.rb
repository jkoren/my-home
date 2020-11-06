class Api::V1::PossessionsController < ApplicationController
  #before_action :authenticate_user!, except: [:index, :show]

  def index
    possessions = Possession.all.select{|possession|possession.room == params[:id]}
    render json: possessions
  end
  
  def show
    possession = Possession.find(params[:id])
    render json: possession, serializer: PossessionShowSerializer
  end

end
