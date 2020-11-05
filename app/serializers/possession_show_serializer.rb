class PossessionShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :manufacturer, :model, :owners_manual, :description, :image, :URL, :operating_video

  belongs_to :room
end
