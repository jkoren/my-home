Rails.application.routes.draw do
  root 'homes#index'

  get '/about', to: 'homes#index'
  get '/rooms', to: 'homes#index'
  get '/rooms/new', to: 'homes#index'
  get '/rooms/:id', to: 'homes#index'
  get '/possessions', to: 'possessions#index'
  get '/possessions/:id', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :rooms, only: [:index, :show, :create] do
        resources :possessions, only: [:create]
      end
      resources :possessions, only: [:index, :show]
    end
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
