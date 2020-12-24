class AllowShareNewPossessiosToResidence < ActiveRecord::Migration[5.2]
  def change
    add_column :residences, :share_new_possessions, :boolean,  default: true
  end
end
