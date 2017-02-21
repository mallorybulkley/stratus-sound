class Api::PlaylistsController < ApplicationController
  def index
    if params[:user_id]
      @playlists = Playlist.where(user_id: params[:user_id])
    elsif params[:track_id]
      @playlists = Playlist.joins(:playlist_tracks).where("playlist_tracks.track_id = ?", params[:track_id])
    else
      @playlists = Playlist.all
    end
  end

  def create
    @playlist = Playlist.new(title: params[:title])
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
end
