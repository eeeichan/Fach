class AddIndexTelUidToPrivateUser < ActiveRecord::Migration[5.2]
  def change
    add_index :private_users, :tel, :unique => true
    add_index :private_users, :uid, :unique => true
  end
end
