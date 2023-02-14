Rails.application.routes.draw do

  resources :companies, only: [:show, :update] do 
    resources :projects
    resources :users, only: [:index, :show, :update]
  end

  resources :users, except: [:index, :create] do 
    resources :project_roles
  end

  resources :schedule, only: :show do
    resources :events 
  end

  resources :projects do
    resources :tasks
    resources :project_roles
  end
  
  post "/signup", to: "users#create"
  get "/home", to: "users#home"
  get "/myaccount", to: "users#my_account"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/companyprojects", to: "comapnies#company_projects"

  post "/newproject", to: "projects#create"

  get "/myprojects", to: "project_roles#my_projects"

end
