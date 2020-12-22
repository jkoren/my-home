# residences_controller_spec.rb
require "rails_helper"

RSpec.describe Api::V1::ResidencesController, type: :controller do 

  let!(:arlo) { Realtor.create(
    name: "Ted Nugent",
    company: "Wango Tango Real Estate"
    )}
    
  let!(:matthew_lane) { Residence.create(
    name: "41 Matthew Lane",
    realtor: arlo
    )}

  let!(:user1) {User.create(
    email: "blah@gmail.com", 
    password: "blahblah",
    residence: matthew_lane
  )}

  describe 'GET response' do

    it 'returns the user\'s residence' do
      sign_in user1
      get :index
      residence = JSON.parse(response.body)
      expect(residence.first['name']).to eql('41 Matthew Lane')
    end
  end
end
