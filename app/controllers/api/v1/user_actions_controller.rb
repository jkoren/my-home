# user_actions_controller.rb
class Api::V1::UserActionsController < ApiController
#   skip_before_filter :verify_authenticity_token - CAUSED HEROKU TO CRASH

  def index
    render json: UserAction.all.sort_by{ |a| a[:created_at] }.reverse
  end

end
