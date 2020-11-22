class Room < ApplicationRecord
  validates :name, presence: true
  mount_uploader :aws_image, RoomImageUploader

  has_many :possessions, dependent: :destroy
  belongs_to :residence 
end