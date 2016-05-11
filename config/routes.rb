Rails.application.routes.draw do
  get 'app/index'

  devise_for :users
  resources :adverts

  root "app#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
