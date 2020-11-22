class RemoveUserAssociationFromRoom < ActiveRecord::Migration[5.2]
  def change
    change_table :rooms do |t|
      t.remove_references :user
    end
  end
end
