class ProjectRolesController < ApplicationController
   
    def index
        project_roles = ProjectRole.all 
        render json: project_roles, include: ['user'], status: :ok 
    end

    def show 
        project_role = ProjectRole.find(params[:id])
        render json: project_role, include: ['user'], status: :ok 
    end

    def update 
        project_role = ProjectRole.find(params[:id])
        project_role.update!(project_role_params)
        render json: project_role, include: ['user'], status: :accepted
    end

    def destroy 
        project_role = ProjectRole.find(params[:id])
        project_role.destroy
        head :no_content
    end

    def create 
        project_role = ProjectRole.create!(project_role_params)
        render json: project_role, include: ['user'], status: :created 
    end

    private 

    def project_role_params 
        params.permit(:role_title, :project_head, :required_hours, :description, :user)
    end



end
   
    # def user_roles
    #     user_project_roles = ProjectRole.where(:user_id => current_user.id)
    #     render json: user_project_roles, status: :ok 
    # end    
    
    # def project_page
    #     user_project_roles = ProjectRole.where(:user_id => current_user.id)
    #     user_project = user_project_roles.find(params[:id])
    #     render json: user_project, include: ['project', 'tasks'], status: :ok
    # end