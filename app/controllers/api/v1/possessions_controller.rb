class Api::V1::PossessionsController < ApplicationController
  #before_action :authenticate_user!, except: [:index, :show]

  def index
    # react/js front end
    # binding.pry
    possessions = Possession.all
    render json: possessions
  end

  def show
    possession = Possession.find(params[:id])
    render json: possession, serializer: PossessionShowSerializer

    # modified from group project:
    # render json: 
    # {
    #   possession: serialized_data(possession, PossessionSerializer)
    #   possessions: serialized_data(possession.reviews, PosessionSerializer)
    # }
  end

end
