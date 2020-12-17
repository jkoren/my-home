# activities_controller.rb
class Api::V1::ActivitiesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    render json: Activity.all.sort_by{ |a| a[:created_at] }.reverse
  end

end
