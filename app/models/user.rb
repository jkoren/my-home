class User < ApplicationRecord
  mount_uploader :image, ProfilePhotoUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  belongs_to :residence, optional: true
  # may want to remove optional: true later
  # added to allow automated creation of users for testing
end
