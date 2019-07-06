class AppsController < ApplicationController
  def index
    flash[:notice] = ""
    @private_user = PrivateUser.find(session[:user_id])
    @user = User.find_by(private_user_id: @private_user.id)
    @user.photo_id = @user.photo_id.nil? ? 0 : @user.photo_id
    @user.profile = @user.profile.nil? ? "よろしこ！！" : @user.profile
    @user.nickname = @user.nickname.blank? ? "No Name" : @user.nickname
  end

  def edit
    @private_user = PrivateUser.find(session[:user_id])
    @user = User.find_by(private_user_id: @private_user.id)
    #edit action update
    User.transaction do
      if @user.update!(profile_params)
        flash[:notice] = "プロフィールを更新しました"
        render 'index'
      end
    end

    rescue => e
      raise e
  end

  private
    def profile_params
      params.require(:profile).permit(:nickname, :birth, :job, :personality, :profile)
    end

    def upload_params

    end

    def setting_params

    end
end
