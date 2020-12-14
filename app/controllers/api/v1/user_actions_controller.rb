# user_actions_controller.rb
class Api::V1::UserActionsController < ApiController
  skip_before_filter :verify_authenticity_token
end
