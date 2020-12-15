# user_actions_controller.rb
class Api::V1::UserActionsController < ApiController
#   skip_before_filter :verify_authenticity_token - CAUSED HEROKU TO CRASH

# UserAction.last.user.email
  def index
    render json: UserAction.all
  end

end
