# routes.rb
Rails.application.routes.draw do
  root 'homes#index'

  get '/realtors', to: 'homes#index'
  get '/realtors/:id', to: 'homes#index'
  get '/residences', to: 'homes#index' # for demo
  get '/residences/:id', to: 'homes#index'
  get '/rooms', to: 'homes#index' # for demo
  get '/rooms/:id', to: 'homes#index'
  get '/possessions/:id', to: 'homes#index'
  get '/about', to: 'homes#index'

  get "/residences/:id/rooms/new", to: "homes#index" 
  get "/rooms/:id/possessions/new", to: "homes#index" 

  namespace :api do
    namespace :v1 do
      # resources :residences, only: [:index, :show, :update, :destroy]
      # resources :rooms, only: [:index, :show, :update, :destroy]
      # resources :possessions, only: [:index, :show, :update, :destroy]

      resources :realtors, only: [:index, :show, :update, :destroy, :create] do
        resources :residences, only: [:index, :show, :create,  ]
      end

      resources :residences, only: [:index, :show, :update, :destroy] do
        resources :rooms, only: [:index, :show, :create  ]
      end

      resources :rooms, only: [:index, :show, :update, :destroy] do
        resources :possessions, only: [:index, :show, :create]
      end
      
    end
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
