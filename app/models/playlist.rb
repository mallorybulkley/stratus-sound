class Playlist < ActiveRecord::Base
  validates :title, :user, presence: true

  belongs_to :user
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks

  include PgSearch
  multisearchable against: [:title]
end
