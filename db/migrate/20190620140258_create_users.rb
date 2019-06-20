class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :nickname
      t.integer :age
      t.integer :tel
      t.integer :email
      t.integer :post
      t.integer :address1
      t.integer :address2
      t.string :address3
      t.integer :private_user_id
      t.integer :post_id
      t.integer :profile_id
      t.integer :photo_id

      t.timestamps
    end
  end
end
