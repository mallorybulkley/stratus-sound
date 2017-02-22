json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title
  json.username playlist.user.username
  json.photo_url asset_path(playlist.tracks.first.photo.url)
end
