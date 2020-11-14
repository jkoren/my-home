class AddAwsImageToPossession < ActiveRecord::Migration[5.2]
  def change
        add_column :possessions, :aws_image, :string
  end
end
