class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :exception
  
  # def owner
  #   u = User.friendly.find_by(name: params[:name])
  #   u.name if current_user
  # end

  # def this_user
  #   binding.pry
  #   current_user ? current_user.name : "not_logged_in"
  # end

  protected
  
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:image])
  end
end


