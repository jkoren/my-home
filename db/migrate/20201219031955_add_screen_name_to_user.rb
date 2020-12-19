class AddScreenNameToUser < ActiveRecord::Migration[5.2]
  def change
        add_column :users, :screen_name, :string, null: false, default: "-"
  end
end
