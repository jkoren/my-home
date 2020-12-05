class Possession < ApplicationRecord
  attr_reader :aws_purchase_receipt_url
  mount_uploader :aws_image, PossessionImageUploader
  mount_uploader :aws_owners_manual, PossessionOwnersManualUploader
  mount_uploader :aws_warranty, PossessionWarrantyUploader
  mount_uploader :aws_purchase_receipt, PossessionPurchaseReceiptUploader

  belongs_to :room

  def URL_thumbnail
    if @URL
      return 'https://my-home-production.s3.amazonaws.com/uploads/thumbnails/youtube_thumbnail.png'
    else 
      return 'https://my-home-production.s3.amazonaws.com/uploads/thumbnails/youtube_thumbnail.png'
    end
  end  

end