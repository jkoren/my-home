class Api::V1::ResidencesController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def show
    # binding.pry
    residence = Residence.find(params[:id])
    render json: residence, serializer: ResidenceShowSerializer
  end
  
  def index # for demo use only
    residences = Residence.all
    render json: residences, each_serializer: ResidenceShowSerializer
  end

end
