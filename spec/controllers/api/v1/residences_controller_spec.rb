# residences_controller_spec.rb
require "rails_helper"

RSpec.describe Api::V1::ResidencesController, type: :controller do 
  arlo_image = File.open(File.join( Rails.root,'/app/assets/images/seed_images/realtors/arlo_nugent.jpg'))

  let!(:arlo) {
    Realtor.create(
      name: "Arlo Nugent",
      company: "Blue Chip Realty Group",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/GWQp_QqlWimHrpWaq2hCCQ/o.jpg",
      aws_image: arlo_image,
      phone_number: "(866) 823-6302",
      email: "anugent@bluechiprealtygroup.com",
      URL: "bluechiprealtygroup.com"
    )}

 let!(:MatthewLane) { 
   Residence.create(
    name: "41 Matthew Ln",
    street: "41 Matthew Ln",
    city: "Waltham",
    state: "MA",
    image: "https://m.cbhomes.com/p/102/72753147/1Bd3F36Aac3142B/full.jpg",
    realtor: arlo
  )}

 let!(:CollegeFarm) { 
   Residence.create(
    name: "315 College Farm Rd #6",
    street: "315 College Farm Rd #6",
    city: "Waltham",
    state: "MA",
    image: "https://m1.cbhomes.com/p/102/72707418/bf5EFC892DD14f6/full.jpg",
    realtor: arlo
  )}

  # RSpec.describe UsersController, type: :controller do
    describe "GET#index" do
      it "should return a list of all the residences" do
        get :index
        returned_json = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(response.content_type).to eq("application/json")
        expect(returned_json.length).to eq 2

        expect(returned_json[0]["name"]).to eq "41 Matthew Ln"
        expect(returned_json[0]["city"]).to eq "Waltham"

      end
    end
  # end

  # describe "GET#show" do

  #   it "should return an movie with all its attributes" do
  #     Vote.create!(
  #       user: user1,
  #       review: review1,
  #       vote: 1
  #     )
    
  #     Vote.create!(
  #       user: user1,
  #       review: review2,
  #       vote: 1
  #     )

  #     sign_in user1
  #     get :show, params: {id: movie2.id}
  #     returned_json = JSON.parse(response.body)
  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq("application/json")
  #     expect(returned_json.length).to eq 2
  #     expect(returned_json["movie"]["title"]).to eq "Arrival"
  #     expect(returned_json["movie"]["year"]).to eq 2017
  #     expect(returned_json["movie"]["summary"]).to eq "Very sad story about parenthood"
  #     expect(returned_json["reviews"][0]["body"]).to eq "It was okay"
  #     expect(returned_json["reviews"][0]['rating']).to eq 3
  #     expect(returned_json["reviews"][1]["body"]).to eq "AWESOME!"
  #     expect(returned_json["reviews"][1]['rating']).to eq 100
  #     expect(returned_json["reviews"][0]["votes"][0]["vote"]).to eq 1
  #     expect(returned_json["reviews"][1]["votes"][0]["vote"]).to eq 1
  #   end
  # end


  # describe "POST#create" do
  #   context "when a request correct params is made and user is signed in" do
  #     let!(:good_movie_data) { { movie: {title: "Terminator", summary: "Arnold's voice", year: 1985} } }

  #     it "adds the movie to the database" do 
  #       sign_in user1
  #       previous_count = Movie.count

  #       post :create, params: good_movie_data

  #       new_count = Movie.count

  #       expect(new_count).to eq previous_count + 1
  #     end

  #     it "returns the new movie object as json" do
  #       sign_in user1
  #       post :create, params: good_movie_data

  #       returned_json = JSON.parse(response.body)

  #       expect(response.status).to eq 200
  #       expect(response.content_type).to eq("application/json")
  #       expect(returned_json).to be_kind_of(Hash)
  #       expect(returned_json).to_not be_kind_of(Array)
  #       expect(returned_json["title"]).to eq "Terminator"
  #       expect(returned_json["summary"]).to eq "Arnold's voice"
  #       expect(returned_json["year"]).to eq 1985
  #     end
  #   end

  #   context "when parameters are not filled out but user is signed in" do
  #     let!(:bad_movie_data) { { movie: {summary: "Arnold's voice", year: 1985} } }

  #     it "should not should not save to the database" do
  #       sign_in user1
  #       previous_count = Movie.count

  #       post :create, params: bad_movie_data

  #       new_count = Movie.count

  #       expect(new_count).to eq previous_count
  #     end

  #     it "does not successfully create a movie object" do
  #       sign_in user1
  #       post :create, params: bad_movie_data

  #       returned_response = JSON.parse(response.body)

  #       expect(returned_response["errors"]["title"][0]).to eq "can't be blank"
  #     end
  #   end
  #   context "when the parameters are correct but user is not signed it" do
  #     let!(:bad_movie_data) { { movie: {title: "Terminator", summary: "Arnold's voice", year: 1985} } }

  #     it "should not should not save to the database" do
  #       previous_count = Movie.count

  #       post :create, params: bad_movie_data

  #       new_count = Movie.count

  #       expect(new_count).to eq previous_count
  #     end

  #     it "we are redirected to the sign in page" do
  #       post :create, params: bad_movie_data
        
  #       response_body = response.body
  #       expect(response.status).to eq 302 
  #       expect(response_body).to eq "<html><body>You are being <a href=\"http://test.host/users/sign_in\">redirected</a>.</body></html>"
  #     end
  #   end
  # end
end
