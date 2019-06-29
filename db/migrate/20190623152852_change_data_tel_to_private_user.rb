class ChangeDataTelToPrivateUser < ActiveRecord::Migration[5.2]
  def change
    change_column :private_users, :tel, :string
  end
end
