class CompaniesController < ApplicationController

    def show 
        company = Company.find(params[:id])
        render json: company, include: ['users', 'projects'] status: :ok 
    end

end
