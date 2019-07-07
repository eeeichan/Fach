class AppsController < ApplicationController
  def index
    flash[:notice] = ""
    @private_user = PrivateUser.find(session[:user_id])
    @user = User.find_by(private_user_id: @private_user.id)
    # @user.photo_id = @user.photo_id.nil? ? 0 : @user.photo_id
    @user.profile = @user.profile.nil? ? "よろしこ！！" : @user.profile
    @user.nickname = @user.nickname.blank? ? "No Name" : @user.nickname
    @photo = Photo.where(uid: @user.id).last
    if @photo.nil?
      @profile_image = "/profile_images/default.png"
    else
      @profile_image = @photo.path.blank? ? "/profile_images/default.png" : @photo.path
    end
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

  def upload
    @private_user = PrivateUser.find(session[:user_id])
    @user = User.find_by(private_user_id: @private_user)
    # パラメータからファイルを取得
    file = params[:profile][:photo]
    # ファイル名を取得
    name = file.original_filename
    # 出力先のパスを設定※今回は、public/docs配下に配置
    output_path = Rails.root.join('public/profile_images', name)
    # ファイルを出力
    File.open(output_path, 'wb'){ |f| f.write(file.read) }
    Photo.transaction do
      @photo = Photo.new(uid: @user.id, path: "/profile_images/#{name}")
      if @photo.save!
        flash[:notice] = "プロフィール画像を登録しました"
        redirect_to '/apps'
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
      params.require(:profile).permit(:photo)
    end

    def setting_params

    end
end
