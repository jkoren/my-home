class PossessionShowSerializer < ActiveModel::Serializer 
  include Rails.application.routes.url_helpers
  
  attributes :id, :name, :manufacturer, :model, :owners_manual, :description, :year_built, :purchased_from, :image, :purchase_date, :purchase_receipt, :purchase_price, :URL, :operating_video, :URL, :warranty, :aws_image, :active_storage_image, :active_storage_owners_manual
  # , :professional

  belongs_to :room

  def professional
    client = Professional.new("02451")
    professional = client.format_yelp_api_response
    return professional
  end

  def active_storage_image
    return unless object.active_storage_image.attached?

    object.active_storage_image.blob.attributes
    .slice('filename', 'byte_size')
    .merge(url: image_url)
    .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def image_url
    url_for(object.active_storage_image)
  end
  
end
