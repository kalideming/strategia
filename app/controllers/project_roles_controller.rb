class ProjectRolesController < ApplicationController

    # need custom routes for rendering of user vs manager vs upper management 
   
    def index
        project_roles = ProjectRole.all 
        render json: project_roles, status: :ok 
    end

    def show 
        project_role = ProjectRole.find(params[:id])
        render json: project_role, status: :ok 
    end

    def update 
        project_role = ProjectRole.find(params[:id])
        project_role.update!(project_role_params)
        render json: project_role, status: :accepted
    end

    def destroy 
        project_role = ProjectRole.find(params[:id])
        project_role.destroy
        head :no_content
    end

    def user_roles
        user_project_roles = ProjectRole.where(:user_id => current_user.id)
        render json: user_project_roles, status: :ok 
    end

    def create 
        project_role = ProjectRole.create!(project_role_params)
        render json: project_role, status: :created 
    end

    def project_page
        user_project_roles = ProjectRole.where(:user_id => current_user.id)
        user_project = user_project_roles.find(params[:id])
        render json: user_project, include: ['project'], status: :ok
    end

    private 

    def project_role_params 
        params.permit(:role_title, :project_head, :required_hours, :description, :user_id)
    end



end
