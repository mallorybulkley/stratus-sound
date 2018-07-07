require "rails_helper"

RSpec.describe User, :type => :model do
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }

  describe 'associations' do
    it { should have_many(:tracks)}
    it { should have_many(:comments)}
    it { should have_many(:playlists)}
    it { should have_many(:plays)}
  end
end