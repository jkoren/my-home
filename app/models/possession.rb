class Possession < ApplicationRecord
  mount_uploader :image, PossessionImageUploader
  belongs_to :room
end