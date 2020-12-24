class AllowLeaderboardToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :allow_leaderboard, :boolean,  default: true
  end
end
