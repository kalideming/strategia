class SchedulesController < ApplicationController


    def userschedule
        user_schedule = Schedule.where(:user_id => current_user.id)
        render json: user_schedule, status: :ok
    end

    # private 

    # def user_schedule
    #     Schedule.where(:user_id => current_user.id)
    # end

    # def schedule_events
    #     schedule_events 
    # end
end
