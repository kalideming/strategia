class ProjectsController < ApplicationController
     # need custom routes for rendering of user vs manager vs upper management 
    def index 
        projects = Project.all 
        render json: projects, status: :ok 
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

    def company_projects
        companyprojs = Project.joins(:company).where(companies: {name: => current_user.company})
        render json: companyprojs, include: ['company'], status: :ok 
    end

    def project_page
        project = Project.find(params[:id])
        render json: project, include: ['tasks', 'project_roles', 'company'], status: :ok
    end
 
    private

    def project_params 
        params.permit(:title, :description, :deadline, :photo, :documentation)
    end
end
