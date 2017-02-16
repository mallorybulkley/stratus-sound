class Track < ActiveRecord::Base
  validates :name, :user, :release_date, :genre, presence: true
  
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: { content_type:
    [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ] }

  has_attached_file :photo
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  belongs_to :user

  # attr_reader :photo
end

# Track.new(name: "Fake Track", user_id: 4, release_date: Date.today, genre: "fake", description: "a fake song for testing")
