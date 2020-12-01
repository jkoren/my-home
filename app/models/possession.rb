class Possession < ApplicationRecord
  mount_uploader :aws_image, PossessionImageUploader
  belongs_to :room
  # has_many_attached :files
  has_one_attached :active_storage_image
end