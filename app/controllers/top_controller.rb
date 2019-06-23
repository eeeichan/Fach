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
    entry_user
    if @private_user.save!
      redirect_to controller: 'users', action: 'index'
    else
      flash[:danger] = "登録できませんでした"
      render action: 'index'
    end
  end

  private

    def entry_user
      binding.pry
      # @private_user = PrivateUser.new(session_params)
      @private_user = PrivateUser.new(session_params)
    end

    def set_user
      # binding.pry
      private_user = PrivateUser.find_by!(tel: session_params[:tel])
      @user = User.find_by!(private_user_id: private_user.id)
    rescue
      flash[:danger] = "ログインに失敗しました"
      #redirect_to action: 'index'
      render action: 'index'
    end

    def session_params
      #params.fetch(:user, {}).permit(:tel)
      params.require(:private_users).permit(:tel)
    end
end