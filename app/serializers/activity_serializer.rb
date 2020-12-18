# activity_serializer.rb
class ActivitySerializer < ActiveModel::Serializer 
  attributes :action, :table, :name, :id_of_item, :email, :created_at

  def email
    if object.user
      object.user.email
    else  
      "user not found"
    end
  end
end