class Comment < ActiveRecord::Base
  validates :body, :user, :track, presence: true

  belongs_to :user, :track
end
