# professionals_controller.rb
class Api::V1::ProfessionalsController < ApiController

  def index # copied from professionals.rb for quick and dirty list of realtors - no email address in yelp response
    #generate a CSV file of yelp realtors by starting servers (bundle exec rails s & yarn run start) changing query & location and typing in chrome address bar: http://localhost:3000/api/v1/realtors
    base_url = "https://api.yelp.com/v3/businesses/search"

    query = "realtor"
    location = "newton, ma"
    quantity = 50 # 50 is yelp max

    
    response = Faraday.get(base_url) do | req |
      req.params['term'] = query
      req.params['location'] = location
      req.params['limit'] = quantity
      req.params['categories'] = 'home services'
      req.headers["Authorization"] = "Bearer #{ENV["YELP_API_KEY"]}"
    end



    parsed_response = JSON.parse(response.body)
    binding.pry # no email address in response

    require 'csv'
    #write realtors to a csv file
    csvFile = "#{Rails.root}/public/realtors.csv"
    headers = ["name", "address1","address2", "city", "state","zip_code","phone","rating","yelp id"]
    CSV.open(csvFile, 'w', write_headers: true, headers: headers) do |writer|
      parsed_response["businesses"].each do |business|
        theLocation = business["location"]
        # binding.pry
        professional = [business["name"],theLocation["address1"], theLocation["address2"], theLocation["city"], theLocation["state"],theLocation["zip_code"],business["display_phone"],business["rating"], business["id"]]
        writer << professional
      end
    end

    # render json: professionals
  end

end

# class YelpAPIWrapper  
#   def initialize(location, term, limit)

#   end

#   def getRealtors(query)
#       response = requestRealtors(query)
#       parsed_response = parse_response(response)
#   end

#   private

#   def requestRealtors(query)
#       @response = Faraday.get(base_url) do | req |
#       req.params['term'] = query
#       req.params['location'] = location
#       req.params['limit'] = quantity
#       req.params['categories'] = 'home services'
#       req.headers["Authorization"] = "Bearer #{ENV["YELP_API_KEY"]}"
#     end
#   end

#   def parse_response(response)
#      parsed_response = JSON.parse(response.body)
#   end

#   def writeToCSV

#   end

#   def write_to_db

#   end

#   def read_from_db 
#   end



# end

# wrapper = Wrapper.new(....)

# Wrapper.getRealtors(query)
# Wrapper.parseResponse