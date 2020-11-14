class Possession < ApplicationRecord
  mount_uploader :aws_image, PossessionImageUploader
  belongs_to :room
end