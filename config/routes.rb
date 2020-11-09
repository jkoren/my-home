# routes.rb
Rails.application.routes.draw do
  root 'homes#index'

  get '/about', to: 'homes#index'
  get '/rooms', to: 'homes#index'
  get '/rooms/new', to: 'homes#index'
  get '/rooms/:id', to: 'homes#index'
  get '/possessions', to: 'homes#index'
  get '/possessions/:id', to: 'homes#index'
  get '/residences', to: 'homes#index'
  get '/residences/:id', to: 'homes#index'
  get "/rooms/:id/possessions/new", to: "homes#index"
  # get ‘*page’, to: ‘homes#index’

  namespace :api do
    namespace :v1 do
      resources :possessions, only: [:index, :show]
      resources :residences, only: [:index, :show, :create] do
        resources :rooms, only: [:index, :show, :create ]
      end
      resources :rooms, only: [:index, :show, :create] do
        resources :possessions, only: [:index, :create ]
      end
    end
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
