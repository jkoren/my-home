class PossessionShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :manufacturer, :model, :description, :URL, :operating_video, :URL, :aws_image, :aws_owners_manual, :aws_purchase_receipt, :aws_warranty

  belongs_to :room

  # def professional
  #   client = Professional.new("02451")
  #   professional = client.format_yelp_api_response
  #   return professional
  # end

end
