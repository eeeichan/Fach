Rails.application.routes.draw do
  get 'plaies/index'
  root 'top#index'

  get  'signin', to: 'top#index'
  get  'signup', to: 'top#index'
  post 'signin', to: 'top#signin'
  post 'signup', to: 'top#signup'

  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
