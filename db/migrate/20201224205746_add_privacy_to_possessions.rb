class AddPrivacyToPossessions < ActiveRecord::Migration[5.2]
  def change
    add_column :possessions, :new_possession_list_privacy, :boolean,  default: false
  end
end
