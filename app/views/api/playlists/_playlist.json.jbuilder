json.id playlist.id
json.title playlist.title
json.user_id playlist.user.id
json.tracks playlist.tracks do |track|
  json.partial! 'api/tracks/track', track: track
end
