class CreateChatRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_rooms do |t|
      t.integer :post_to_user
      t.string :post_content

      t.timestamps
    end
  end
end
