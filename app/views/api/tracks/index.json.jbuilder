json.array! @tracks do |track|
  json.extract! track, :id, :name, :photo_file_name
  json.user track.user, :id, :username
  json.photo_url asset_path(track.photo.url)
end
