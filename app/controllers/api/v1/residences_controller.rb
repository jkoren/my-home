class Api::V1::ResidencesController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def index
    residences = Residence.all
    render json: residences
  end

  def show
    residence = Residence.find(params[:id])
    render json: residence, serializer: ResidenceShowSerializer
  end

end
