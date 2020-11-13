class Professional

  # a professional from the Yelp database

  def initalize(residence_zip)
    @residence_zip = residence_zip
  end

  def format_yelp_api_response
    parsed_professional = parse_yelp_api_response
    if parsed_professional["cod"] === "404"
      return {
        code: parsed_professional["cod"],
        message: parsed_professional["message"]
      }
    else 
      return {
        field1: parsed_professional["something"][0]["main"],
        field2: parsed_professional["something"][0]["main"]
      }
    end
  end

  private

  def fetch_professional_by_zip
    # a single professional first

    # from yelp documentation
    # https://rapidapi.com/serg.osipchuk/api/YelpAPI?endpoint=apiendpoint_b0bbd650-f966-11e7-a721-ad6f2fab4b23getBusinesses

    require 'uri'
    require 'net/http'
    require 'openssl'

    url = URI("https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinesses")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Post.new(url)
    request["content-type"] = 'application/x-www-form-urlencoded'
    request["x-rapidapi-key"] = '4061fa49d3msh838bc4842eba1b8p10285ajsnc22254c8efa5'
    request["x-rapidapi-host"] = 'YelpAPIserg-osipchukV1.p.rapidapi.com'
    request.body = "term=Appliances%20%26%20Repair&accessToken=SZg3IbePsFZ-z5h0qSnmeCcUPeP5q-F-j3SgLAZKjmKmU8JLmkkw9OOREb-oqkHjw1J8iRJghFI-fK_iJazm7Tkng8WluhmpsfdSAUgKNOWwEk-nlThHjvSHC5aZX3Yx&locale=Waltham%2C%20MA"

    response = http.request(request)
    # puts response.read_body
   
    # from wesley davis example
    # yelp_api_response = Faraday.get(url)
    return response
  end

  def parse_yelp_api_response
    professional_response_body = fetch_professional_by_zip.body 
    parsed_professional_json = JSON.parse(professional_response_body)

    return parsed_professional_json
  end

end
