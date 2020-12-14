class CreateUserActions < ActiveRecord::Migration[5.2]
  def change
    create_table :user_actions do |t|
      t.string :action, null: false
      t.string :table, null: false
      t.integer :id_of_item
      t.belongs_to :user, null: false 

      t.timestamps
    end
  end
end
