class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def home 
        render json: current_user
    end

    def show 
        render json: current_user
    end

    def update
        user = logged_on_user.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end 

    def destroy
        user = logged_on_user.find(params[:id])
        user.destroy
        head :no_content 
    end

    private 

    def user_params 
        params.permit(:first_name, :last_name, :photo, :address, :email, :username, :password, :position, :company, :manager, :upper_management, :available_hours)
    end 

    def logged_on_user
        User.where(:id => current_user.id)
    end

end
