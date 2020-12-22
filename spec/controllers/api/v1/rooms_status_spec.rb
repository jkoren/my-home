# rooms_controller_spec.rb
require "rails_helper"

RSpec.describe Api::V1::RoomsController, type: :controller do 
  describe 'GET index' do
    it 'returns a status message' do
      get ('index')
      binding.pry
      json = JSON.parse(response.body)
      expect(json['status']).to eql('ok')
    end
  end
end
