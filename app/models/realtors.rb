class Realtor < ApplicationRecord
  validates :name, presence: true

  has_many :residences, dependent: :destroy  
end