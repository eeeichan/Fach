class User < ApplicationRecord
  has_many :private_users, class_name: "PrivateUser", foreign_key: "private_user_id", dependent: :destroy
  has_many :chat_spaces, class_name: "ChatSpace", foreign_key: "chat_space_id", dependent: :destroy
end
