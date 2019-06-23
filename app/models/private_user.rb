class PrivateUser < ApplicationRecord
  belongs_to :users, class_name: "User", foreign_key: "private_user_id"
end
