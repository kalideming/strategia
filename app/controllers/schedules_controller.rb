class SchedulesController < ApplicationController

    def show
        user_schedule = Schedule.where(:user_id => current_user.id)
        render json: user_schedule, include: ['events'], status: :ok
    end

end
