class RoomShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :description, :image, :aws_image

  belongs_to :residence
  has_many :possessions
end