json.extract! track, :id, :name, :release_date, :description, :genre, :user_id
json.photo_url asset_path(track.photo.url)
