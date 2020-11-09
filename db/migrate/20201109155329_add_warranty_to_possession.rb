class AddWarrantyToPossession < ActiveRecord::Migration[5.2]
  def change
    add_column :possessions, :warranty, :string
  end
end
