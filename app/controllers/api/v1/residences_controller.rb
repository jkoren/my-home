class Api::V1::ResidencesController < ApiController
  before_action :authenticate_user!


  def show
    residence = Residence.find(params[:id])
    render json: residence, serializer: ResidenceShowSerializer
  end
  
  def index # for demo use only
    if current_user.admin?
      residences = Residence.all
    else
      residences = []
      residences.push(current_user.residence)
    end
    render json: residences, each_serializer: ResidenceShowSerializer
  end

  # residences_controller.rb
  def create
    new_residence = Residence.new(residence_params)
    # for alpha test, all residences created for "no realtor" instead of the passed realtor_id 
    # if later we want to create for a specifc realtor, use this code: 
    #   realtor = Realtor.find(params[:realtor_id])
    
    realtor = Realtor.find_by(name: "My-Home")
    new_residence.realtor = realtor
    if new_residence.save
      binding.pry
      # current_user.residence = new_residence # why is current_user nil?
      render json: new_residence
    else
      render json: { errors: new_residence.errors }
    end
  end

  private
    def residence_params
      params.permit([:id, :name, :street, :street2, :city, :state, :image, :aws_image])
    end

    def authenticate_user
      if !user_signed_in?
        render json: {error: ["You need to be signed in first"]}
      end
    end

    def serialized_data(data, serializer)
      ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer, scope: current_user)
    end


end
