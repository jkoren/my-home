class ResidenceShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :street, :street2, :city, :state, :image, :aws_image, :zip_code
  
  has_many :rooms
end
