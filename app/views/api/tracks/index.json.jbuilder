json.array! @tracks do |track|
  json.extract! track, :id, :name, :peaks
  json.user track.user, :id, :username
  json.photo_url asset_path(track.photo.url)
  json.audio_url asset_path(track.audio.url)
  json.play_count track.plays.count
  json.comment_count track.comments.count
end
