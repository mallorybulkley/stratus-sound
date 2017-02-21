class Api::PlaylistTracksController < ApplicationController
  def create
    @playlist_track = PlaylistTrack.new(
      playlist_id: params[:playlistId],
      track_id: params[:trackId])
    if @playlist_track.save
      @playlist = Playlist.find(params[:playlistId])
      render 'api/playlists/show'
    else
      render json: { errors: @playlist_track.errors.full_messages }, status: 422
    end
  end

  def destroy
    @playlist_track = PlaylistTrack.find(params[:playlist_track_id])
    if @playlist_track.destroy
      render json: {}
    else
      render json: { errors: @playlist_track.errors.full_messages }, status: 422
    end
  end
end
