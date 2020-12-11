# professionals_controller.rb
class Api::V1::ProfessionalsController < ApiController

  def index
    base_url = "https://api.yelp.com/v3/businesses/search"
    query_term = "plumber"
    location = "02421"

    response = Faraday.get(base_url) do | req |
      req.params['term'] = query_term
      req.params['limit'] = 5
      req.params['location'] = location
      req.headers["Authorization"] = "Bearer #{ENV["YELP_API_KEY"]}"
    end
    parsed_response = JSON.parse(response.body)
    
    #process parsed response
    professionals = []
    parsed_response["businesses"].each do |business|
      new_professional = Professional.new(business["name"],business["location"]["display_address"], business["phone"], business["rating"])
      professionals << new_professional
    end
    
    # gifs_wrapper = GifsWrapper.new
    # image_urls = gifs_wrapper.retrieve_gifs(query)
    
    render json: {professionals:  professionals}
  end
end