class PossessionShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :manufacturer, :model, :owners_manual, :description, :year_built, :purchased_from, :image, :purchase_date, :purchase_receipt, :purchase_price, :URL, :operating_video, :URL, :warranty, :aws_image, :aws_owners_manual, :aws_purchase_receipt, :aws_warranty
  # , :professional

  belongs_to :room

  def professional
    client = Professional.new("02451")
    professional = client.format_yelp_api_response
    return professional
  end

end
