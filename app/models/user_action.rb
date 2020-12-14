class UserAction < ApplicationRecord
  validates :action, presence: true
  validates :table, presence: true

  belongs_to :user 
end