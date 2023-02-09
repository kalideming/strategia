Rails.application.routes.draw do
  resources :companies, only: [:show]
  resources :events
  resources :schedule
  resources :users, only: [:create, :update, :destroy]
  resources :tasks
  resources :project_roles, only: [:update, :destroy, :create]
  resources :projects, only: [:show, :update, :destroy, :create]

  get "/myschedule", to: "schedules#userschedule"

  get "/myevents", to: "events#myevents"
  
  post "/signup", to: "users#create"
  get "/home", to: "users#home"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/myprojects", to: "project_roles#user_roles"
  post "/addrole", to: "project_roles#create"
  # get "/projectpage", to: "project_roles#project_page"
  # get "/companyprojects", to: "project_roles#company_projects"
  # get "/projectpage", to: "projects#project_page"
  post "/newproject", to: "projects#create"
  get "/companyprojects", to: "projects#company_projects"

  # get "/", to: "project_roles"

  # patch "/updateprofile", to: "users#update"

  # need custome routes to:
  #   - project tasks to index them within the project page 
  #   - project roles route to show users their index of project roles (project_role_id => current_user.project_role_id)
  #   - route to show all project roles on a given project 
  #   - route to show all projects for a given user (project.project_role_id => current_user.project_role_id)
  #   - route to show all projects for managers and upper management of a specific company (project.company => current_user.company)
  #     -uh oh might have to add company column to projects table 
            # -could circumvent this by doing some sort of function on the front to equate company name within users and project_roles 
    

end
