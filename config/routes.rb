Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :create, :show, :destroy, :update] do
      member do
        post :play
        post :like
        delete :like
      end
    end
    resources :comments, only: [:create, :destroy, :index]
    resources :playlists, only: [:index, :create, :show, :destroy, :update] do
      member do
        post :like
        delete :like
      end
    end
    resources :searches, only: [:index]
  end
end
