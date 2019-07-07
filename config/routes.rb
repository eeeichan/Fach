Rails.application.routes.draw do

  root 'top#index'

  get  'signin', to: 'top#index'
  get  'signup', to: 'top#index'
  post 'signin', to: 'top#signin'
  post 'signup', to: 'top#signup'

  resources :apps, only: [:index]
  get '/apps/*path', to: 'apps#index'

  post '/apps/edit', to: 'apps#edit'
  post '/apps/upload', to: 'apps#upload'
  #resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
