Rails.application.routes.draw do
  resources :events
  resources :schedules, only: [:index, :show]
  resources :users
  resources :tasks
  resources :project_roles
  resources :projects

  get "/home", to: "items#liked"
  get "/cart", to: "items#cart"
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  patch "/me", to: "users#update"
  
end
