class Room < ApplicationRecord
  validates :name, presence: true

  has_many :possessions, dependent: :destroy
  belongs_to :user  
end