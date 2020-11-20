class ConnectResidencesToRealtor < ActiveRecord::Migration[5.2]
  def change
        add_belongs_to :residences, :realtor
  end
end
