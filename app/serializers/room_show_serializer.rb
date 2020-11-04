class RoomShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :description, :image

  has_many :possessions
end