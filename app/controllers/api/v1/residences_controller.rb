class Api::V1::ResidencesController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def index
    residences = Residence.all.select{|residence|residence.realtor == params[:id]}
    residences = Residence.all
    render json: residences, serializer: ResidenceShowSerializer
  end

  def show
    residence = Residence.find(params[:id])
    render json: residence, serializer: ResidenceShowSerializer
  end

end
