json.id user.id
json.username user.username
json.photo_url asset_path(user.photo.url(:large))
json.likes do
  json.array! user.likes
end

json.playlists do
  json.array! user.playlists do |playlist|
    json.extract! playlist, :id, :title
  end
end
