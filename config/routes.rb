Rails.application.routes.draw do
  resources :events
  resources :schedules
  resources :users
  resources :tasks
  resources :project_roles
  resources :projects
  get '/hello', to: 'application#hello_world'
end
