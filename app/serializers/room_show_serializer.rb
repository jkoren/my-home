class RoomShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :description, :image

  belongs_to :residence
  has_many :possessions
end