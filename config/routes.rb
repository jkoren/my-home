Rails.application.routes.draw do
  root 'homes#index'

  get '/rooms', to: 'homes#index'
  get '/rooms/new', to: 'homes#index'
  get '/rooms/:id', to: 'homes#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
