class ConnectUsersToResidences < ActiveRecord::Migration[5.2]
  def change
    add_belongs_to :users, :residence
  end
end
