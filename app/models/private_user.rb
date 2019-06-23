class PrivateUser < ApplicationRecord
  has_one :users, class_name: "User", foreign_key: "uid", dependent: :destroy
end
