class CompaniesController < ApplicationController

    def show 
        render json: user_company, status: :ok 
    end

    def update
        user_company.update!(company_params)
        render json: user_company, status: :accepted 
    end

    def company_projects
        render json: user_company, include: ['projects'], status: :ok 
    end

    private 

    def user_company
        Company.where(:id => current_user.company_id)
    end

    def company_params
        params.permit(:name)
    end
    
end
