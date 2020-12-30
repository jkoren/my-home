class ResidenceShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :street, :street2, :city, :state,  :zip_code, :display_area, :note, :aws_image, :demo
  
  has_many :rooms
end
