class Possession < ApplicationRecord
  mount_uploader :aws_image, PossessionImageUploader
  mount_uploader :aws_owners_manual, PossessionOwnersManualUploader
  mount_uploader :aws_warranty, PossessionWarrantyUploader
  mount_uploader :aws_purchase_receipt, PossessionPurchaseReceiptUploader
  mount_uploader :aws_tag, PossessionTagUploader

  belongs_to :room
  has_many :professionals

  delegate :residence, :to => :room, :allow_nil => true
  # https://stackoverflow.com/questions/4021322/belongs-to-through-associations

  def demo
    return (residence.name == "315 College Farm Rd #6")
  end

  def URL_thumbnail
    if @URL
      return 'https://my-home-production.s3.amazonaws.com/uploads/thumbnails/youtube_thumbnail.png'
    else 
      return 'https://my-home-production.s3.amazonaws.com/uploads/thumbnails/youtube_thumbnail.png'
    end
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