json.extract! user, :id, :nickname, :age, :tel, :email, :post, :address1, :address2, :address3, :private_user_id, :post_id, :profile_id, :photo_id, :created_at, :updated_at
json.url user_url(user, format: :json)
