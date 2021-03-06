class Activity < ApplicationRecord
  validates :action, presence: true
  validates :table, presence: true

  belongs_to :user 

  def self.leader_board
    possession_summary = []
    users = User.all
    users.each do | user |
      possession_count = 0
      if user.allow_leaderboard 
        if user.residence != nil && user.residence.rooms != nil
          user.residence.rooms.each do | room |
            if room.possessions != nil
              possession_count += room.possessions.count
            end
          end
        end
      end
      if possession_count > 0
        possession_summary.push([user.user_name, possession_count])
      end
    end
    possession_summary.sort_by!{ |user, possession_count| possession_count }.reverse!

    return possession_summary
  end

end