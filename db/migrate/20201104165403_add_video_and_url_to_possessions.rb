class AddVideoAndUrlToPossessions < ActiveRecord::Migration[5.2]
  def change
    add_column :possessions, :operating_video, :string
    add_column :possessions, :URL, :string
  end
end
