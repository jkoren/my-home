class CreateResidences < ActiveRecord::Migration[5.2]
  def change
    create_table :residences do |t|
      t.string :name, null: false
      t.text :street
      t.text :street2
      t.text :city
      t.text :state
      
      t.string :image
      
      t.timestamps
    end
  end
end
