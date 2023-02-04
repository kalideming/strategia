class ProjectRolesController < ApplicationController

    # need custom routes for rendering of user vs manager vs upper management 
   
    def index 

    end

    def show 

    end

    def update 

    end

    def destroy 

    end

    private 

    def project_role_params 
        params.permit(:role_title, :project_head, :required_hours, :description)
    end



end
