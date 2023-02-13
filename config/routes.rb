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

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
