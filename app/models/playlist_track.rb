class PlaylistTrack < ActiveRecord::Base
  validates :playlist, :track, presence: true
  validates :track, uniqueness: { scope: :playlist }

  belongs_to :playlist
  belongs_to :track
end
