class Possession < ApplicationRecord
  mount_uploader :aws_image, PossessionImageUploader
  mount_uploader :aws_owners_manual, PossessionOwnersManualUploader
  belongs_to :room
end