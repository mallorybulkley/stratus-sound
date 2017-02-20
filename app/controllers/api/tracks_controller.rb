class Api::TracksController < ApplicationController
  def index
    if params[:playlistId]
      @tracks = Playlist.find(params[:playlistId]).tracks.includes(:user)
      # @tracks = Track.joins(:playlists).includes(:user).where("playlist_id = ?", params[:playlistId])
    else
      @tracks = Track.all.includes(:user)
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: { errors: @track.errors.full_messages }, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render :index
    else
      render json: { errors: @track.errors.full_messages }, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:name, :user_id, :release_date, :genre, :audio, :photo, :description)
  end
end
