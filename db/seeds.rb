# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User.create(
  username: "Guest",
  password: "password",
  location: "New York, NY",
  bio: "This is a guest account",
  photo: File.open('/app/assets/images/profiledefault.png')
)

User.create(
  username: "Mallory",
  password: "password",
  location: "New York, NY",
  bio: "Hello!",
  photo: File.open('/app/assets/images/mallory.jpg')
)

USER_PHOTOS = []

10.times do |i|
  User.create(
    username: Faker::Internet.user_name(Faker::TwinPeaks.character, %w(_ -)),
    password: "password",
    location: Faker::TwinPeaks.location,
    bio: Faker::TwinPeaks.quote,
    photo: USER_PHOTOS[i]
  )
end

GENRES = [
  "Ambient",
  "Classical",
  "Country",
  "Disco",
  "Electronic",
  "Folk",
  "Hip-hop",
  "Indie",
  "Jazz",
  "Metal",
  "Rock"
];

Track.destroy_all

AUDIO = []

25.times do |i|
  Track.create(
    name: Faker::Book.title,
    user_id: (1..12).to_a.sample,
    release_date: Faker::Date.between(1.year.ago, Date.today),
    genre: GENRES.sample,
    photo: PHOTOS.sample,
    audio: AUDIO[i],
    description: Faker::Lorem.paragraph
  )
end
