class User < ApplicationRecord
  mount_uploader :image, ProfilePhotoUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  belongs_to :residence, optional: true
  has_one :realtor, through: :residence

  def admin?
    role == "admin"
  end

end
