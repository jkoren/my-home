class ResidenceShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :street, :street2, :city, :state, :image, :aws_image
  
  has_many :rooms
end
