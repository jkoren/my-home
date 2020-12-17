class ChangeUserActionsToActivities < ActiveRecord::Migration[5.2]
  def change
    rename_table :user_actions, :activities
  end
end
