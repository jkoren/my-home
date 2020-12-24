class AddLeaderboardPrivacyToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :leaderboard_privacy, :boolean,  default: false
  end
end
