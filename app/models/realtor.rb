class Realtor < ApplicationRecord
  validates :name, presence: true
  mount_uploader :aws_image, RealtorImageUploader
  has_many :residences, dependent: :destroy  
end