json.extract! @comment, :id, :body, :track_id
json.user do
  json.id @comment.user.id
  json.photo_url asset_path(user.photo.url)
end
