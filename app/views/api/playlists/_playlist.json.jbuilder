json.id playlist.id
json.title playlist.title
json.user_id playlist.user_id
json.username playlist.user.username
unless playlist.tracks.empty?
  json.tracks playlist.tracks do |track|
    json.partial! 'api/tracks/track', track: track
  end
end
