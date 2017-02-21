json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title
  json.username playlist.user.username
end
