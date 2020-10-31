class Room < ApplicationRecord
  has_many :possessions, dependent: :destroy
  belongs_to :user 
  
end