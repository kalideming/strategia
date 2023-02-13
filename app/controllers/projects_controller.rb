class ProjectsController < ApplicationController

    def index 
        projects = Project.all
        render json: projects, include: ['tasks', 'project_roles', 'company'], status: :ok 
    end
    
    def show 
        project = Project.find(params[:id])
        render json: project, include: ['tasks', 'project_roles', 'company'], status: :ok
    end

    def update 
        project =Project.find(params[:id])
        project.update!(project_params)
        render json: project, status: :accepted
    end

    def destroy 
        project = Project.find(params[:id])
        project.destroy
        head :no_content
    end

    def create 
        project = Project.create!(project_params)
        render json: project, status: :created 
    end
 
    private

    def project_params 
        params.permit(:title, :description, :deadline, :photo, :documentation)
    end

end

    # def company_projects
    #     companyprojs = Project.where(:company_id => current_user.company_id)
    #     render json: companyprojs, status: :ok 
    # end

    # def delete_task
    #     task = Project.find(params[:tasks])
    #     task.destroy
    #     head :no_content
    # end


    # def update_task
    #     project = Project.find(params[:id])
    #     task = Task.find(params[:project_id])
    #     task.update!(task_params)
    #     render json: task, status: :accepted
    # end

        # def task_params
    #     params.permit(
    #         tasks: [:title, :description, :completed, :deadline]
    #     )
    # end