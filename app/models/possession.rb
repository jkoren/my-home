class Possession < ApplicationRecord
  # mount_uploader :profile_photo, PossessionImageUploader
  belongs_to :room
end