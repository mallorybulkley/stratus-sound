json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title
  json.user_id playlist.user.id
  json.username playlist.user.username
  if !playlist.tracks.empty?
    json.photo_url asset_path(playlist.tracks.first.photo.url(:large))
  end
end
