class User < ApplicationRecord
  belongs_to :private_user, class_name: "PrivateUser", foreign_key: "uid", optional: true
  has_one :chat_spaces, class_name: "ChatSpace", dependent: :destroy

  validates :private_user_id, presence: true, uniqueness: true
end
