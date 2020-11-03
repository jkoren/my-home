Rails.application.routes.draw do
  root 'homes#index'

  get '/rooms', to: 'homes#index'
  get '/rooms/new', to: 'homes#index'
  get '/rooms/:id', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :rooms, only: [:index, :show, :create] do
        resources :possessions, only: [:index, :show, :create]
      end
    end
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
