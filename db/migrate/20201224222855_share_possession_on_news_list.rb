class SharePossessionOnNewsList < ActiveRecord::Migration[5.2]
  def change
    add_column :possessions, :share_on_new_possession_list, :boolean,  default: true
  end
end
