class ChatSpace < ApplicationRecord
  belongs_to :users, class_name: "User", foreign_key: "chat_space_id"
  has_many :chat_rooms, class_name: "ChatRoom", foreign_key: "chat_room_id"
end
