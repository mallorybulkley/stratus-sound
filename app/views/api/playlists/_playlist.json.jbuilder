json.id playlist.id
json.title playlist.title
json.user_id playlist.user_id
json.username playlist.user.username
unless playlist.tracks.empty?
  json.tracks playlist.tracks do |track|
    json.extract! track, :id, :name, :release_date, :description, :genre
    json.user track.user, :id, :username
    json.photo_url asset_path(track.photo.url(:small))
  end
end
