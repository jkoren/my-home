class CreateRealtor < ActiveRecord::Migration[5.2]
  def change
    create_table :realtors do |t|
      t.string :name, null: false
      t.string :company
      t.string :image
      t.string :aws_image
      t.string :phone_number
      t.string :email
      t.string :URL

      t.timestamps
    end
  end
end
