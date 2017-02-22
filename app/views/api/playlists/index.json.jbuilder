json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title
  json.user_id playlist.user.id
  json.username playlist.user.username
  json.tracks playlist.tracks do |track|
    json.partial! 'api/tracks/track', track: track
  end
  json.photo_url asset_path(playlist.tracks.first.photo.url)
end
