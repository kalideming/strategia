class CompaniesController < ApplicationController

    def index 
        companies = Company.all 
        render json: projects, status: :ok 
    end

    def show 
        company = Company.find(params[:id])
        render json: company, status: :ok 
    end

    # def company_projects 
    #     user_company = Company.find(params[:name => current_user.company])
    #     projects = user_company.projects.all
    #     render json: projects, include: ['projects'], status: :ok 
    # end

end
