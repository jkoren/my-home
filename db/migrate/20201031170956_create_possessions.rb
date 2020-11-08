# /db/migrate/20201031170956_create_possessions.rb
class CreatePossessions < ActiveRecord::Migration[5.2]
  def change
    create_table :possessions do |t|
      t.string :name, null: false
      t.string :manufacturer, null: false
      t.string :model
      t.string :owners_manual
      t.text :description
      t.integer :year_built
      t.string :purchased_from
      t.string :image
      t.date :purchase_date
      t.string :purchase_receipt
      t.string :purchase_price

      t.belongs_to :room, null:false
 
      t.timestamps
    end
  end
end
