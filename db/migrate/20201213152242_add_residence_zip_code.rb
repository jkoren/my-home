class AddResidenceZipCode < ActiveRecord::Migration[5.2]
  def change
    add_column :residences, :zip_code, :string, default: "02451"
  end
end
