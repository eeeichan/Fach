class AddColumnSexAndBirthToPrivateUser < ActiveRecord::Migration[5.2]
  def change
    add_column :private_users, :sex, :integer, :null => false
    add_column :private_users, :birth, :date
  end
end
