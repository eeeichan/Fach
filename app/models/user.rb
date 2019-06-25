class User < ApplicationRecord
  belongs_to :private_user, class_name: "PrivateUser"
  has_one :chat_spaces, class_name: "ChatSpace", dependent: :destroy
end
