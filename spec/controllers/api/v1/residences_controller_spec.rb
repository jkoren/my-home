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

  describe 'GET index' do

    it 'returns the user\'s residence' do
      sign_in user1
      get :index
      residence = JSON.parse(response.body)
      expect(residence.first['name']).to eql('41 Matthew Lane')
    end

    it 'returns only one residence' do
      sign_in user1
      get :index
      residence = JSON.parse(response.body)
      expect(residence.count).to eql(1)
    end
  end

  describe "GET show" do
    # it 'returns the user\'s residence' do
    #   sign_in user1
    #   get :show
    #   residence = JSON.parse(response.body)
    #   expect(residence['name']).to eql('41 Matthew Lane')
    # end
  end

  describe "POST#create" do
  end

end
