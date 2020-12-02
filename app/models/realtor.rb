class Realtor < ApplicationRecord
  attr_reader :name_and_company
  validates :name, presence: true
  mount_uploader :aws_image, RealtorImageUploader
  has_many :residences, dependent: :destroy 
  

  def name_and_company
    # binding.pry
    if !company || company == ""
      return name
    else 
      return name + ", " + company
    end
  end  

end