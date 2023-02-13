class CompaniesController < ApplicationController

    def show 
        company = user_company.find(params[:id])
        render json: company, status: :ok 
    end

    def update
        company = user_company.find(params[:id])
        company.update!(company_params)
        render json: company, status: :accepted 
    end

    private 

    def user_company
        Company.where(:id => current_user.company_id)
    end

    def company_params
        params.permit(:name)
    end
end
