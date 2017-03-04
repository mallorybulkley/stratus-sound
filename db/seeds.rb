User.destroy_all

users = []

users.push(User.create!(
  username: "Guest",
  password: "password",
  location: "New York, NY",
  bio: "This is a guest account"
))

users.push(User.create!(
  username: "Mallory",
  password: "password",
  location: "New York, NY",
  bio: "Hello!",
  photo: "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/mallory.jpg"
))

LOCATIONS = ["Monk's Restaurant", "Upper West Side", "Jerry's Apartment", "The Chinese Restaurant", "The Post Office", "New York City", "Newark, NJ", "Brooklyn", "Reality"]

CHARACTERS = ["Jerry Seinfeld", "Elaine Benes", "Cosmo Kramer", "George Costanza",
  "NEWMAN", "The Maestro", "David Puddy", "Larry David", "Art Vandelay"]

BIOS = ["What's the deal with that?", "Yada yada yada", "Giddyup", "I invented 'It's not you, it's me'", "Hello, Jerry.",
  "There aren't any villas for rent in Tuscany", "Go Devils!", "Pretty good", "Importer-Exporter"]

PHOTOS = [
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/jerry.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/elaine.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/kramer.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/george.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/newman.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/bob.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/puddy.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/larry.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/users/art.jpg"
]

9.times do |i|
  users.push(User.create!(
    username: CHARACTERS[i],
    password: "password",
    location: LOCATIONS[i],
    bio: BIOS[i],
    photo: PHOTOS[i]
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


ARTISTS = [
  "Monplaisir",
  "Quint Baker",
  "The Agrarians",
  "sanmi",
  "Lobo Loco",
  "Nosens",
  "Mirth Naarc",
  "Mesmerists",
  "The Modern Airline",
  "Infecticide",
  "Scott Holmes",
  "springtide",
  "Scott Gratton",
  "Podington Bear"
]

ARTIST_LOCATIONS = [
  "UK",
  "New York",
  "Brooklyn",
  "a basement somewhere",
  "Australia",
  "BKLYN",
  "San Diego",
  "Austin, TX",
  "nowhere",
  "London",
  "Stockholm",
  "~ J a p a n ~",
  "Nashville",
  "Rhode Island",
  "Greensboro NC"
]

14.times do |i|
  users.push(User.create!(
  username: ARTISTS[i],
  password: "password123",
  location: ARTIST_LOCATIONS.sample,
  ))
end

Track.destroy_all


TRACK_NAMES = [
  "Waves",
  "Free",
  "Free - Remix",
  "Dream World",
  "Moon Child",
  "Two Hearts Living in Two Separate Worlds",
  "Intimacy of the Funk",
  "Requickened City",
  "Mountain Creek",
  "Oortsche Wolke",
  "Stellar Legacy",
  "Tongue Weaves",
  "Make With The Action",
  "Le Monopole du Cur",
  "The Hours",
  "Skeptic",
  "Trailways A"
]

AUDIO = [
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Monplaisir_-_06_-_Waves.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Monplaisir_-_12_-_Free_To_Use_12.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Monplaisir_-_13_-_Free_To_Use_13.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Quint_Baker_-_08_-_Dream_World.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Quint_Baker_-_13_-_Moon_Child.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/The_Agrarians_-_05_-_Two_Hearts_Living_In_Two_Separate_Worlds.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/sanmi_-_10_-_Intimacy_of_The_Funk.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Lobo_Loco_-_01_-_Requickened_City_ID_377.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Lobo_Loco_-_10_-_Mountain_Creek_ID_399.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Lobo_Loco_-_01_-_Oortsche_Wolke_ID_80.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Nosens_-_04_-_Stellar_Legacy.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Mirth_Naarc_-_04_-_Tongue_Weaves.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/The_Modern_Airline_-_10_-_Make_With_The_Action.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Infecticide_-_12_-_Le_Monopole_du_Cur.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Scott_Gratton_-_01_-_The_Hours.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Podington_Bear_-_Skeptic.mp3",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/audios/Podington_Bear_-_Trailways_A.mp3"
]

LOOKUP = [
  "Monplaisir",
  "Monplaisir",
  "Monplaisir",
  "Quint Baker",
  "Quint Baker",
  "The Agrarians",
  "sanmi",
  "Lobo Loco",
  "Lobo Loco",
  "Lobo Loco",
  "Nosens",
  "Mirth Naarc",
  "The Modern Airline",
  "Infecticide",
  "Scott Gratton",
  "Podington Bear",
  "Podington Bear"
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
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/sun-718336_640.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Xx_album_cover.svg.png",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Studio_Killers_Album_Instrumental_Cover.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Setherial_Igel_Rock_12_09_2010_2_NB.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Music-Violin-Cello-Instrument-Musician-1114901.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Jaco_pastorius_87.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Ernesto-Llorens.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/ElinLarsson_Stockholm20090715.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Daniel_Fusco_bass.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/city-dark-new-york-bridge.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/Arcade_fire_mg_7287.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/4660454529_2593b15b7f_b.jpg",
  "https://s3.amazonaws.com/STRATUS-SOUND-DEV/tracks/images/3108511_7ea02bae.jpg"
]

DESCRIPTIONS = [
  "Worked really hard on this one, hope you guys like it!",
  "Plz comment and share with your friends! Thanks for listening!",
  "We know you've been waiting... Here's our latest track - let us know what you think in the comments!!",
  "Wrote this song about a girl... ",
  "Recorded live in a warehouse in Brooklyn",
  "Felt inspired to write this one the other day and finally got it recorded, hope you like it",
  "Check out my other songs! If you enjoy this please share with your friends",
  "Our new single out now! Come see us on tour - summer 2017 all along the East Coast and in rural Germany",
  "This song is dedicated to YOU - please comment and check out my other tracks",
  "Enjoy!",
  "Lyrics by me. Music by me. Photo by me. It's all by me.",
  "Vocals recorded by a ghost in a basement, guitar recorded by me in Bushwick",
  "This song is a culmination of ideas of mine from 2013 - 2016. It embraces imperfections and process - moments left open allowing these sounds to breathe. More than just club driven, this track acts as soundtrack to the past couple of years of my life.",
  "Out now - catch us on tour 2017",
  "Thanks for supporting and listening!",
  "Here's my latest recording - let me know what you think in the comments!",
  "this 1 is about love"
]

tracks = []

while tracks.count < AUDIO.count
  begin
    i = tracks.count
    t = Track.create(
      name: TRACK_NAMES[i],
      user: User.find_by(username: LOOKUP[i]),
      release_date: Faker::Date.between(1.year.ago, Date.today),
      genre: GENRES.sample,
      audio: AUDIO[i],
      description: DESCRIPTIONS.sample,
      photo: ALBUM_ART.sample
    )
    tracks << t if t.valid?
  rescue OpenURI::HTTPError
    puts "rescued: ", AUDIO[i]
  end
end

COMMENTS = [
  "Love it!",
  "Awesome!!!",
  "Great track",
  "amazing",
  "this is my new favorite song! incredible",
  "love this song!",
  "nice work",
  "been listening to this all day - it never gets old!",
  "really cool song",
  "not your best work... sorry",
  "This song really speaks to me! Thank you!",
  "LOVE THIS!",
  "love this",
  "Sweet sound!",
  "nice mix",
  "awesome! good job",
  "really digging this",
  "nice groove",
  "great song! keep it up"
]

tracks.each do |track|
  rand(4..15).times do
    Comment.create(
      body: COMMENTS.sample,
      user_id: users.sample.id,
      track_id: track.id
    )
  end
end

Playlist.destroy_all
PlaylistTrack.destroy_all

PLAYLIST_TITLES = [
  "Workout songs",
  "Chill tunes",
  "Party music",
  "My favorites",
  "the BEST playlist",
  "Tunes for commuting",
  "Best songs 2017",
  "My faves",
  "Killer songs",
  "Spring feelz",
  "Party tunes",
  "Cool party jams",
  "Ultimate Party",
  "Chill out",
  "Random songs"
]

20.times do |i|
  playlist = Playlist.create(
    user: users.sample,
    title: PLAYLIST_TITLES.sample
  )

  rand(5..20).times do
    PlaylistTrack.create(
      playlist: playlist,
      track: tracks.sample
    )
  end
end
