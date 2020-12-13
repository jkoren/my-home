class Professional
  # def initialize(id, name, address1, address2, city, state, zip_code, display_address, phone, rating)
  def initialize(id, name, display_address, phone, rating)
    @id = id
    @name = name
    @display_address = display_address
    # @address1 = address1
    # @address2 = address2
    # @city = city
    # @state = state
    # @zip_code = zip_code
    @phone = phone
    @rating = rating
  end

  # def cityAndState
  #   if city && state
  #     city+", "+state
  #   else 
  #     ""
  #   end
  # end

end

