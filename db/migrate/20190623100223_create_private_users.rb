class CreatePrivateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :private_users do |t|
      t.string :name
      t.datetime :tel
      t.string :email

      t.timestamps
    end
  end
end
