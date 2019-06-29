class AddColumnToPrivateUser < ActiveRecord::Migration[5.2]
  def up
    add_column :private_users, :uid, :integer
  end
  def down
    remove_column :private_users, :uid
  end
end
