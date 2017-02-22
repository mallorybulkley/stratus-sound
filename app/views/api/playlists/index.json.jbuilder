json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title
  json.user_id playlist.user.id
  json.username playlist.user.username
  json.firstTrack do
    json.partial! 'api/tracks/track', track: playlist.tracks[0]
  end
  json.photo_url asset_path(playlist.tracks.first.photo.url)
end
