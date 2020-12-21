# residences_controller_spec.rb
require "rails_helper"

RSpec.describe Api::V1::ResidencesController, type: :controller do 
  user = FactoryBot.create(:user)
  binding.pry

#   in slack - 
FactoryBot question - I'm writing some tests and getting an error from FactoryBot
# ActiveRecord::RecordInvalid:
#   Validation failed: Email has already been taken
# even though FactoryBot is set to create a new email address for each "create".  Here is the controller and FactoryBot code.  What am I doing wrong?

  let!(:arlo) {
    Realtor.create(
      name: "Ted Nugent",
      company: "Wango Tango Real Estate"
    )}

  let!(:MatthewLane) { 
   Residence.create(
    name: "41 Matthew Lane",
    realtor: arlo
  )}


  describe "GET#index" do
    it "a logged in 'member' user should see their residence" do
      sign_in user

      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1

      # expect(returned_json[0]["name"]).to eq "41 Matthew Lane"

    end
  end

  describe "GET#show" do
  end


  describe "POST#create" do
  end

end
