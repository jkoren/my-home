class Residence < ApplicationRecord
  validates :name, presence: true

    belongs_to :realtor
  has_many :rooms, dependent: :destroy  
end