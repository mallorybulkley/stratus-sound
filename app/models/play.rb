class Play < ActiveRecord::Base
  validates :track, :user, presence: true

  belongs_to :track
  belongs_to :user
end
