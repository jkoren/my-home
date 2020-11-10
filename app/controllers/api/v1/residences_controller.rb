class Api::V1::ResidencesController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def index
    # react/js front end
    residences = Residence.all
    render json: residences
  end

  def show
    residence = Residence.find(params[:id])
    render json: residence, serializer: ResidenceShowSerializer

    # modified from group project:
    # render json: 
    # {
    #   residence: serialized_data(residence, ResidenceSerializer)
    #   possessions: serialized_data(possession.reviews, PosessionSerializer)
    # }
  end

end
