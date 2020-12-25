class PossessionNewsSerializer < ActiveModel::Serializer 
  attributes :id, :name, :manufacturer, :model, :updated_at, :display_location, :zip_code, :share_on_new_possession_list

  def city
    object.room.residence.city
  end

  def state
    object.room.residence.state
  end

  def zip_code
    object.room.residence.zip_code
  end

  def display_location
    if state == nil || state == ""
      return city
    elsif city == nil || city == ""
      return state
    else
      return city+", "+state
    end
  end
  
  # nesting courtesy of: https://medium.com/@maxfpowell/a-quick-intro-to-rails-serializers-b390ced1fce7

end
