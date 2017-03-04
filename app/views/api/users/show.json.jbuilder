json.id @user.id
json.username @user.username
json.location @user.location
json.bio @user.bio
json.photo_url asset_path(@user.photo.url(:large))

json.playlists do
  json.array! @user.playlists do |playlist|
    json.extract! playlist, :id, :title
  end
end
