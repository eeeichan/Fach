class PlaiesController < ApplicationController
  def index
    @private_user = PrivateUser.find(session[:user_id])
    @user = User.find_by(private_user_id: @private_user.id)
    @user.photo_id = @user.photo_id.nil? ? 0 : @user.photo_id
    @user.profile = @user.profile.nil? ? "よろしこ！！" : @user.profile
    @user.nickname = @user.nickname.blank? ? "No Name" : @user.nickname
  end
end
