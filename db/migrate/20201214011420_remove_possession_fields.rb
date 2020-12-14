class RemovePossessionFields < ActiveRecord::Migration[5.2]
  def up
    remove_column :possessions, :image
    remove_column :possessions, :owners_manual
    remove_column :possessions, :year_built
    remove_column :possessions, :purchased_from
    remove_column :possessions, :purchase_date
    remove_column :possessions, :purchase_price
    remove_column :possessions, :warranty
  end

  def down
    add_column :possessions, :image, :string
    add_column :possessions, :owners_manual, :string
    add_column :possessions, :year_built, :integer
    add_column :possessions, :purchased_from, :string
    add_column :possessions, :purchase_date, :date
    add_column :possessions, :purchase_price, :string
    add_column :possessions, :warranty, :string
  end

end

