class RealtorShowSerializer < ActiveModel::Serializer 
  attributes :id, :name, :image, :aws_image, :phone_number, :email, :URL
  has_many :residences, dependent: :destroy
end
