# json.extract! track, :id, :name, :release_date, :description, :genre, :user_id
# json.photo_url asset_path(track.photo.url)
# json.audio_url asset_path(track.audio.url)

json.extract! track, :id, :name, :release_date, :description, :genre
json.user track.user, :id, :username
json.photo_url asset_path(track.photo.url)
json.audio_url asset_path(track.audio.url)
