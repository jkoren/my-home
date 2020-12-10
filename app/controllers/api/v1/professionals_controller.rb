# professionals_controller.rb
class Api::V1::ProfessionalsController < ApiController

  def index
    base_url = "https://api.yelp.com/v3/businesses/search"
    query_term = "plumber"
    location = "02451"

    # "SZg3IbePsFZ-z5h0qSnmeCcUPeP5q-F-j3SgLAZKjmKmU8JLmkkw9OOREb-oqkHjw1J8iRJghFI-fK_iJazm7Tkng8WluhmpsfdSAUgKNOWwEk-nlThHjvSHC5aZX3Yx"
    response = Faraday.get(base_url) do | req |
      req.params['limit'] = 10
      req.params['location'] = location
      req.headers["Authorization"] = "Bearer #{ENV["YELP_API_KEY"]}"
      req.body = {query: query_term}.to_json
    end

    parsed_response = JSON.parse(response.body)
    
    #process parsed response
    professionals = []
    parsed_response["businesses"].each do |business|
      new_professional = Professional.new(business["name"],business["location"]["display_address"], business["phone"], business["rating"])
      professionals << new_professional
    end
    binding.pry

    # gifs_wrapper = GifsWrapper.new
    # image_urls = gifs_wrapper.retrieive_gifs(query)

    content_type :json
    json image_urls
  end
end