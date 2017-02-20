User.destroy_all

USER_PHOTOS = [
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/6877194653_110324efd6_b.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/8571386239_fdb8ea34fb.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/Creative-Tail-Animal-bear.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/Creative-Tail-Animal-fish.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/Emojione_1F415.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/Emojione_1F431.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/avatar-1295397_640.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/llaveros_purr_gato_by_pcgaijin-d9hb9zv.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/small-breed-dogs-1720435_640.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/yellow-717161_640.jpg"
]

users = []

users.push(User.create!(
  username: "Guest",
  password: "password",
  location: "New York, NY",
  bio: "This is a guest account",
  photo: USER_PHOTOS.sample
))

users.push(User.create!(
  username: "Mallory",
  password: "password",
  location: "New York, NY",
  bio: "Hello!",
  photo: "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/mallory.jpg"
))


8.times do
  users.push(User.create!(
    username: Faker::Internet.user_name(Faker::TwinPeaks.character, %w(_ -)),
    password: "password",
    location: Faker::TwinPeaks.location,
    bio: Faker::TwinPeaks.quote,
    photo: USER_PHOTOS.sample
  ))
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

AUDIO = [
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Monplaisir_-_06_-_Waves.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Monplaisir_-_12_-_Free_To_Use_12.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Monplaisir_-_13_-_Free_To_Use_13.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Quint_Baker_-_08_-_Dream_World.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/The_Agrarians_-_05_-_Two_Hearts_Living_In_Two_Separate_Worlds.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/sanmi_-_10_-_Intimacy_of_The_Funk.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Lobo_Loco_-_01_-_Requickened_City_ID_377.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Lobo_Loco_-_10_-_Mountain_Creek_ID_399.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Nosens_-_04_-_Stellar_Legacy.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Mirth_Naarc_-_04_-_Tongue_Weaves.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/music%252FZiklibrenbib%252FMesmerists%252FLeft_songs%252FMesmerists_-_10_-_Three_Times.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/music%252FZiklibrenbib%252FMi_Nave%252FEstela%252FMi_Nave_-_06_-_Matt_Damon.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/The_Modern_Airline_-_10_-_Make_With_The_Action.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Infecticide_-_12_-_Le_Monopole_du_Cur.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Quint_Baker_-_13_-_Moon_Child.mp3"
]

ALBUM_ART = [
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/768px-B_R_OAD_WAY_the_band.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Simpsons_Donut.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Texture-Liquid-Fluid-Shades-Abstract-Blue-Surface-1710940.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/abstract-1470663_640.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/abstract-1979730_960_720.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/b6c57579.jpeg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/background-768347_640.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/giraffe-1235253_640.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/music-1293232_640.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/seamless-1315279_640.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/sun-718336_640.jpg"
]

tracks = []

while tracks.count < 25
  audio = AUDIO.sample
  puts audio

  begin
    tracks.push(Track.create(
      name: Faker::Book.title,
      user_id: users.sample.id,
      release_date: Faker::Date.between(1.year.ago, Date.today),
      genre: GENRES.sample,
      audio: audio,
      description: Faker::Lorem.paragraph,
      photo: ALBUM_ART.sample
    ))
  rescue OpenURI::HTTPError
    puts "rescued"
  end

  puts tracks

end

tracks.each do |track|
  rand(1..15).times do
    Comment.create(
      body: Faker::TwinPeaks.quote,
      user_id: users.sample.id,
      track_id: track.id
    )
  end
end
