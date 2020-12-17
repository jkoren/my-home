class PossessionShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :manufacturer, :model, :description, :URL, :operating_video, :URL, :aws_image, :aws_owners_manual, :aws_purchase_receipt, :aws_warranty, :zip_code

  belongs_to :room

  def zip_code
    object.room.residence.zip_code
  end

end
