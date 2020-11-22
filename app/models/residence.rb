class Residence < ApplicationRecord
  validates :name, presence: true
  mount_uploader :aws_image, ResidenceImageUploader

    belongs_to :realtor
  has_many :rooms, dependent: :destroy  
end