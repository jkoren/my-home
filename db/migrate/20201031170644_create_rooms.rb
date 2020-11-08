# db/migrate/20201031170644_create_rooms.rb
class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.text :description
      t.belongs_to :user, null: false 
      t.string :image
      
      t.timestamps
    end
  end
end
