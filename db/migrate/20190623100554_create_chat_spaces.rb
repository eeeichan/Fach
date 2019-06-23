class CreateChatSpaces < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_spaces do |t|
      t.integer :from_user_id
      t.integer :to_user_id
      t.integer :chat_room_id

      t.timestamps
    end
  end
end
