class User < ApplicationRecord
  mount_uploader :image, ProfilePhotoUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  belongs_to :residence, optional: true
  has_one :realtor, through: :residence
  has_many :user_actions

  def admin?
    role == "admin"
  end

  def user_name
    email.split("@").first
  end

end
