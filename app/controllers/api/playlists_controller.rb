class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: params[:user_id]) # should includes tracks?
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user = current_user

    if @playlist.save
      render :show
    else
      render json: { errors: @playlist.errors.full_messages }, status: 422
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist.destroy
      render json: {}
    else
      render json: { errors: @playlist.errors.full_messages }, status: 422
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
