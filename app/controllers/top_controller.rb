class TopController < ApplicationController
  before_action :set_user, only: [:signin]
  before_action :entry_user, only: [:signup]

  def index
    session[:user_id] = nil
  end

  def signin
    if !@private_user.nil? && !@user.nil?
      session[:user_id] = @private_user.id
      redirect_to plaies_index_url
    else
      flash[:danger] = "ログインに失敗しました"
      #redirect_to action: 'index'
      render action: 'index'
    end
  end

  def signup
    if !@private_user.nil? && !@user.nil?
      session[:user_id] = @private_user.id
      redirect_to controller: 'users', action: 'index'
    else
      @private_user.delete unless @private_user.nil?
      flash[:danger] = "登録できませんでした"
      render action: 'index'
    end
  end

  private

    def entry_user
      User.transaction do
        user = User.last
        if user
          uid = user.id + 1
        else
          # 初期値
          uid = 1
        end
        @private_user = PrivateUser.create!(tel: session_params[:tel], uid: uid)
        puser_tmp = @private_user.id
        @user = @private_user.build_user(private_user_id: puser_tmp)
        @user.save!
      end
      rescue => e
        p e
    end

    def set_user
      @private_user = PrivateUser.find_by(tel: session_params[:tel])
      return if @private_user.nil?
      @user = @private_user.user
    end

    def session_params
      #params.fetch(:user, {}).permit(:tel)
      params.require(:private_users).permit(:tel)
    end
end