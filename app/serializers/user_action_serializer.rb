class UserActionSerializer < ActiveModel::Serializer 
  attributes :action, :table, :name, :id_of_item, :email, :created_at

  # belongs_to :user

  def email
    object.user.email
  end
end