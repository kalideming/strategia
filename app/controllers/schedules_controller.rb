class SchedulesController < ApplicationController

    def show
        render json: user_schedule, status: :ok
    end

    private 

    def user_schedule
        Schedule.where(:user_id => current_user.id)
    end
end
