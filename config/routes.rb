Rails.application.routes.draw do
  resources :events
  resources :schedules, only: [:show]
  resources :users
  resources :tasks
  resources :project_roles
  resources :projects

  # get "/home" to: "users#schedule"
  
  post "/signup", to: "users#create"
  get "/myaccount", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  patch "/updateprofile", to: "users#update"

  need custome routes to:
    - user home page display schedule and events and hours 
    - project tasks to index them within the project page 
    - project roles route to show users their index of project roles (project_role_id => current_user.project_role_id)
    - route to show all project roles on a given project 
    - route to show all projects for a given user (project.project_role_id => current_user.project_role_id)
    - route to show all projects for managers and upper management of a specific company (project.company => current_user.company)
      -uh oh might have to add company column to projects table 
    

end
