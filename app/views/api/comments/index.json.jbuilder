json.array! @comments do |comment|
  json.extract! comment, :id, :body, :track_id
  json.user do
    json.id comment.user.id
    json.username comment.user.username
    json.photo_url asset_path(comment.user.photo.url)
  end
end
