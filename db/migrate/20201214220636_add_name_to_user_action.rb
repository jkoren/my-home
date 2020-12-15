class AddNameToUserAction < ActiveRecord::Migration[5.2]
  def change
    add_column :user_actions, :name, :string, default: "unknown"
  end
end
