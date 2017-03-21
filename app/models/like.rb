class Like < ActiveRecord::Base
  validates :user, presence: true, uniqueness: { scope: :likeable_id }

  belongs_to :user
  belongs_to :likeable, polymorphic: true
end
