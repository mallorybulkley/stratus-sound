class Play < ActiveRecord::Base
  validates :track, presence: true

  belongs_to :track
  belongs_to :user
end
