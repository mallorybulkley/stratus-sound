Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :create, :show, :destroy]
    resources :comments, only: [:create, :destroy, :index]
    resources :playlists, only: [:index, :create, :show, :destroy]
  end
end
