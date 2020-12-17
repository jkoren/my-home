class ActivitySerializer < ActiveModel::Serializer 
  attributes :action, :table, :name, :id_of_item, :email, :created_at

  def email
    object.user.email
  end
end