class AddAwsImageToRoom < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :aws_image, :string
  end
end
