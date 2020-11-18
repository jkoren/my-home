class Api::V1::ResidencesController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def show
    residence = Residence.find(params[:id])
    render json: residence, serializer: ResidenceShowSerializer
  end
  
  def index
    residences = Residence.all.select{|residence|residence.realtor == params[:id]}
    binding.pry
    residences = Residence.all
    render json: residences, serializer: ResidenceShowSerializer
  end


end
