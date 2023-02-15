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
  
  post "/signup", to: "users#create"
  get "/home", to: "users#show"
  get "/myaccount", to: "users#my_account"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/companyprojects", to: "projects#company_projects"
  post "/newproject", to: "projects#create"
  patch "/updateproject", to: "projects#update"
  delete "/deleteproject", to: "projects#destroy"

  get "/myprojects", to: "project_roles#my_projects"

  # get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

end
