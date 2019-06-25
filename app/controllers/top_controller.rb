class TopController < ApplicationController
  before_action :set_user, only: [:signin]
  def index
  end

  def signin
    binding.pry
    if !@private_user.nil? && !@user.nil?
      redirect_to controller: 'users', action: 'index'
    end
  end

  def signup
    entry_user
    if !@private_user.nil? && !@user.nil?
      redirect_to controller: 'users', action: 'index'
    else
      flash[:danger] = "登録できませんでした"
      render action: 'index'
    end
  end

  private

    def entry_user
      user_id = User.find_by_id(:last)
      if user_id
        uid = user_id.id + 1
      else
        # 初期値
        uid = 1
      end
      @private_user = PrivateUser.create(tel: session_params[:tel], uid: uid)
      @user = @private_user.build_user
      @user.private_user_id = @private_user.id
      @user.save
    end

    def set_user
      @private_user = PrivateUser.find_by(tel: session_params[:tel])
      @user = @private_user.user
      
      if @private_user.nil? || @user.nil?
        flash[:danger] = "ログインに失敗しました"
        #redirect_to action: 'index'
        render action: 'index'
      end
    end

    def session_params
      #params.fetch(:user, {}).permit(:tel)
      params.require(:private_users).permit(:tel)
    end
end