# routes.rb
Rails.application.routes.draw do
  root 'homes#index'

  # retrieve information 
  get '/realtors', to: 'homes#index'
  get '/realtors/:id', to: 'homes#index'
  get '/residences', to: 'homes#index' # for demo
  get '/residences/:id', to: 'homes#index'
  get 'residences/new', to: 'homes#index'
  get '/rooms', to: 'homes#index' # for demo
  get '/rooms/:id', to: 'homes#index'
  get '/possessions/:id', to: 'homes#index'

  get '/about', to: 'homes#index'
  get '/splash', to: 'homes#index'
  get '/demo', to: 'homes#index'
  get '/providethis', to: 'homes#index'
  get '/pleasesignin', to: 'homes#index'
  get '/news', to: 'homes#index'
  get '/faq', to: 'homes#index'


  # save information
  get "/residences/:id/rooms/new", to: "homes#index" 
  get "/rooms/:id/possessions/new", to: "homes#index" 

  namespace :api do
    namespace :v1 do   
      resources :realtors, only: [:index, :show] 
      
      resources :residences, only: [:index, :show, :create] do
        resources :rooms, only: [:create]
      end
      
      resources :rooms, only: [:index, :show] do
        resources :possessions, only: [:create]
      end
      
      resources :possessions, only: [:index, :show, :update, :destroy]

      resources :professionals, only: [:index]

      resources :user_actions, only: [:index]
    end
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
