class CompaniesController < ApplicationController

    def index 
        companies = Company.all 
        render json: projects, status: :ok 
    end

    def show 
        company = Company.find(params[:id])
        render json: company, status: :ok 
    end

end
