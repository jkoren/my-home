class Residence < ApplicationRecord
  validates :name, presence: true
  mount_uploader :aws_image, ResidenceImageUploader

  belongs_to :realtor
  has_many :rooms, dependent: :destroy 
  has_many :users 
  has_many :possessions, :through => :rooms

  def display_area
    if city.blank? && state.blank? 
      cityState = ""
    elsif city.blank? && !state.blank? 
      cityState = state
    elsif !city.blank? && state.blank? 
      cityState = city
    elsif !city.blank? && !state.blank?
      cityState = city+", "+state
    end

    if zip_code.blank?
      cityState.blank? ? "" : cityState
    elsif !zip_code.blank?
      cityState.blank? ? zip_code : cityState+" "+zip_code
    end
  end

  def can_edit
    # this should be based on login, but for now, can edit anything but the example
    return (name != "315 College Farm Rd #6")
  end
end