class User < ApplicationRecord
  belongs_to :private_users, class_name: "PrivateUser", foreign_key: "uid"
  has_one :chat_spaces, class_name: "ChatSpace", foreign_key: "chat_space_id", dependent: :destroy
end
