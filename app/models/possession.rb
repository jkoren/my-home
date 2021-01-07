# possession.rb
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
end