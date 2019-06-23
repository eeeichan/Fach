class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :nickname
      t.datetime :birth
      t.string :school
      t.string :job
      t.string :profile
      t.integer :iine
      t.integer :private_user_id
      t.integer :chat_space_id
      t.integer :photo_id
      t.integer :face_id

      t.timestamps
    end
  end
end
