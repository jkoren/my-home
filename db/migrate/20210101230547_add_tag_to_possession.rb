class AddTagToPossession < ActiveRecord::Migration[5.2]
  def change
    add_column :possessions, :aws_tag, :string
  end
end
