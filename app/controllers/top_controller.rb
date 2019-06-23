class TopController < ApplicationController
  before_action :set_user, only: [:signin]
  def index
  end

  def signin
    if @user
      redirect_to controller: 'users', action: 'index'
    end
  end

  def signup
    # 新規登録の処理
  end

  private

    def entry_user
      
    end

    def set_user
      # binding.pry
      @private_user = PrivateUser.find_by!(tel: login_params[:tel])
      @user = User.find_by!(private_user_id: @private_user.id)
    rescue
      flash[:danger] = "ログインに失敗しました"
      #redirect_to action: 'index'
      render action: 'index'
    end

    def login_params
      #params.fetch(:user, {}).permit(:tel)
      params.permit(:tel)
    end

    def signup_params
      params.permit(:name, :tel)
    end
end