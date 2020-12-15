# api_controller.rb
class ApiController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
end