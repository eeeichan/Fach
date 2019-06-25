class TopController < ApplicationController
  before_action :set_user, only: [:signin]
  before_action :entry_user, only: [:signup]

  def index
  end

  def signin
    binding.pry
    if !@private_user.nil? && !@user.nil?
      redirect_to controller: 'users', action: 'index'
    end
  end

  def signup
    binding.pry
    if !@private_user.nil? && !@user.nil?
      redirect_to controller: 'users', action: 'index'
    else
      @private_user.delete unless @private_user.nil?
      flash[:danger] = "登録できませんでした"
      render action: 'index'
    end
  end

  private

    def entry_user
      begin
        user = User.last
        if user
          uid = user.id + 1
        else
          # 初期値
          uid = 1
        end
        @private_user = PrivateUser.create(tel: session_params[:tel], uid: uid)
        puser_tmp = @private_user.id
        @user = @private_user.build_user(private_user_id: puser_tmp)
        
        @user.save
      rescue => e
        pp e
      end
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