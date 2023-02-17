Rails.application.routes.draw do

  resources :companies, only: [:show, :update] do 
    resources :projects
    resources :users, only: [:index, :show, :update]
  end

  resources :users do 
    resources :project_roles
  end

  resources :schedule, only: :show do
    resources :events 
  end

  resources :projects do
    resources :tasks
    resources :project_roles
  end
  
  resources :tasks

  post "/signup", to: "users#create"
  get "/home", to: "users#home"
  get "/myaccount", to: "users#my_account"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/companyprojects", to: "projects#company_projects"
  post "/newproject", to: "projects#create"
  patch "/updateproject", to: "projects#update"
  delete "/deleteproject", to: "projects#destroy"

  get "users/:user_id/project_roles", to: "project_roles#index"
  get "projects/:id/project_roles", to: "project_roles#index"

  get "/myprojects", to: "project_roles#my_projects"
  get "/projects/:id", to:"projects#show"
  get "/allprojectmembers", to: "project_roles#index"
  get "/tasks/:id", to: "tasks#show"
  


  

  # get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

end
