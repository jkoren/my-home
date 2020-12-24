class AddingNoteToResidence < ActiveRecord::Migration[5.2]
  def change
    add_column :residences, :note, :text
  end
end
