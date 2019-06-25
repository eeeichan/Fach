class AddIndexPrivateUserIdToUser < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :private_user_id, :unique => true
  end
end
