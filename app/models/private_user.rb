class PrivateUser < ApplicationRecord
  has_one :user, class_name: "User", dependent: :destroy
end
