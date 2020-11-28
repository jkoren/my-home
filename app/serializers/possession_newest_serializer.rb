class PossessionNewestSerializer < ActiveModel::Serializer 
  attributes :id, :name, :manufacturer, :model, :updated_at, :name
  belongs_to :room
end
