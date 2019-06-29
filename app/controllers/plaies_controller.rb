class PlaiesController < ApplicationController
  def index
    @user = session[:user_id]
  end
end
