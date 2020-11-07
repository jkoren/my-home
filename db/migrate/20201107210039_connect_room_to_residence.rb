class ConnectRoomToResidence < ActiveRecord::Migration[5.2]
  def change
    add_belongs_to :rooms, :residence
  end
end
