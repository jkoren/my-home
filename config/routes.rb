# routes.rb
Rails.application.routes.draw do
  root 'homes#index'

  get '/realtors', to: 'homes#index'
  get '/realtors/:id', to: 'homes#index'
  get '/residences', to: 'homes#index'
  get '/residences/:id', to: 'homes#index'
  get '/rooms/:id', to: 'homes#index'
  get '/possessions/:id', to: 'homes#index'
  get '/about', to: 'homes#index'

  get '/rooms/new', to: 'homes#index' #path not in App.js
  get "/rooms/:id/possessions/new", to: "homes#index" #path not in App.js 

  namespace :api do
    namespace :v1 do
      resources :realtors, only: [:index, :show, :create, :update, :destroy] do
        resources :residences, only: [:index, :show]
      end
      resources :possessions, only: [:index, :show, :create, :update, :destroy]
      resources :residences, only: [:index, :show, :create] do
        resources :rooms, only: [:index, :show, :create ]
      end
      resources :rooms, only: [:index, :show, :create] do
        resources :possessions, only: [:index, :create, :update, :destroy ]
      end
    end
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
