class AddAwsDocumentsToPossessions < ActiveRecord::Migration[5.2]
  def change
    add_column :possessions, :aws_owners_manual, :string
    add_column :possessions, :aws_purchase_receipt, :string
    add_column :possessions, :aws_warranty, :string
  end
end
