#\app\models\profession.rb
class Professional
  def initialize(id, name, address1, address2, city, state, zip_code, display_address, display_phone, rating)
    @id = id
    @name = name
    @display_address = display_address
    @address1 = address1
    @address2 = address2
    @city = city
    @state = state
    @zip_code = zip_code
    @display_phone = display_phone
    @rating = rating
  end

  def self.get_professionals(query, location, quantity)
    base_url = "https://api.yelp.com/v3/businesses/search"

    response = Faraday.get(base_url) do | req |
      req.params['term'] = query
      req.params['location'] = location
      req.params['limit'] = quantity
      req.params['categories'] = 'home services'
      req.headers["Authorization"] = "Bearer #{ENV["YELP_API_KEY"]}"
    end
    parsed_response = JSON.parse(response.body)
    
    #process parsed response
    professionals = []
    parsed_response["businesses"].each do |business|
      theLocation = business["location"]
      new_professional = Professional.new(business["id"],business["name"],theLocation["address1"], theLocation["address2"], theLocation["city"], theLocation["state"],theLocation["zip_code"],theLocation["display_address"],business["display_phone"],business["rating"])
      professionals << new_professional
    end
    return professionals
  end

end

