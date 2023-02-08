class EventsController < ApplicationController

    def index 
        render json: user_events, status: :ok 
    end

    def myevents 
        events = Event.where(:schedule_id => current_user.schedule.schedule_id)
        render json: events, status: :ok 
    end

    def show 
        event = user_events.find(params[:id])
        render json: event, status: :ok
    end

    def create 
        event = Event.create!(event_params)
        render json: event, status: :created 
    end

    def update 
        event = user_events.find(params[:id])
        render json: event, status: :accepted
    end

    def destroy
        event = user_events.find(params[:id])
        head :no_content
    end

    private 

    def user_events
        Event.where(:schedule_id => current_user.schedule.schedule_id)
    end

    def event_params
        params.permit(:schedule_id, :start, :end, :title, :description, :personal, :work, :project)
    end
end
