json.extract! track, :id, :name, :release_date, :description, :genre
json.user track.user, :id, :username
json.photo_url asset_path(track.photo.url(:large))
json.audio_url asset_path(track.audio.url)
json.play_count track.plays.count
json.comment_count track.comments.count
json.peaks track.peaks
