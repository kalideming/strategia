class ProjectsController < ApplicationController

    def show 
        project = Project.find(params[:id])
        render json: project, include: ['tasks', 'project_roles'], status: :ok
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

    def company_projects
        companyprojs = Project.where(:company_id => current_user.company_id)
        render json: companyprojs, status: :ok 
    end
 
    private

    def project_params 
        params.permit(:title, :description, :deadline, :photo, :documentation)
    end
end
