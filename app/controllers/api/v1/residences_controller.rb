class Api::V1::ResidencesController < ApiController
  #before_action :authenticate_user!, except: [:index, :show]

  def show
    residence = Residence.find(params[:id])
    render json: residence, serializer: ResidenceShowSerializer
  end
  
  # def index
  #   #for demo use http://localhost:3000/realtor/4 where 4 is the realtor number
  #   residences = Residence.all.select{|residence|residence.realtor == params[:id]}
  #   binding.pry
  #   residences = Residence.all
  #   render json: residences, serializer: ResidenceShowSerializer
  # end

end
