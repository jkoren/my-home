class Residence < ApplicationRecord
  validates :name, presence: true
  mount_uploader :aws_image, ResidenceImageUploader

  belongs_to :realtor
  has_many :rooms, dependent: :destroy 
  has_many :users 
  has_many :possessions, :through => :rooms

  def display_address
    if city && state && zip
      return city + ", "+state+" "+zip_code
    elsif city && state
      return city + ", "+state
    elsif state && zip_code
      return state + " " + zip_code
    elsif city && zip_code
      return city + " " + zip_code
    elsif city
      return city
    elsif state
      return state
    elsif zip_code  
      return zip_code
    else
      return ""
    end
  end  

end