class PossessionShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :manufacturer, :model, :description, :URL, :operating_video, :URL, :aws_image, :aws_owners_manual, :aws_purchase_receipt, :aws_warranty, :zip_code, :share_on_new_possession_list, :can_edit

  belongs_to :room

  def zip_code
    object.room.residence.zip_code
  end

end
