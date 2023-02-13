class TasksController < ApplicationController

    def index 
        tasks = Task.all
        render json: tasks, include: ['project'], status: :ok
    end
    
    def show 
        task = Task.find(params[:id])
        render json: task, include: ['project'], status: :ok
    end

    def update 
        task = Task.find(params[:id])
        task.update!(task_params)
        render json: task, status: :accepted
    end

    def create 
        task = Task.create!(task_params)
        render json: task, status: :created 
    end

    def destroy 
        task = task.find(params[:id])
        task.destroy 
        head :no_content
    end

    private 

    def task_params
        params.permit(:title, :description, :completed, :deadline, :project)
    end

end
