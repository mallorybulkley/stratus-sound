class Track < ActiveRecord::Base
  validates :name, :user, :release_date, :genre, :photo, :audio, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  has_attached_file :photo
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  belongs_to :user

end
