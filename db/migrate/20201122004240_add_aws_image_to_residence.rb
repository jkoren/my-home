class AddAwsImageToResidence < ActiveRecord::Migration[5.2]
  def change
    add_column :residences, :aws_image, :string
  end
end
