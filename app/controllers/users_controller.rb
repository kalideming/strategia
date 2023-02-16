class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create 

    def index
        users = User.all
        # users = User.where(:company_id => logged_on_user.company_id)
        render json: users, status: :ok 
    end
    
    def show
        user = User.find(params[:id])
        render json: user, status: :ok 
    end
    
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
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

    def home 
        user = logged_on_user
        render json: user, status: :ok
    end

    def my_account
        user = logged_on_user
        render json: user, status: :ok
    end

    private 

    def user_params 
        params.permit(:first_name, :last_name, :photo, :email, :username, :password, :position, :company, :manager, :upper_management, :available_hours)
    end 

    def logged_on_user
        User.where(:id => current_user.id)
    end

end
