class PrivateUser < ApplicationRecord
  has_one :user, class_name: "User", dependent: :delete

  validates :tel, presence: true, uniqueness: {scope: [:uid]}, length: { is: 11 }, numericality: {only_integer: true} 
end
