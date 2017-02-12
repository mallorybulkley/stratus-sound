```js
{
  currentUser: {
    id: 1,
    username: "mallory"
  },
  currentTrack: {
    id: 1,
    name: "Track name",
    artist: "fake username",
    file: "track.mp3",
    image_url: "my_song_art.jpg",
    playing: true
  },
  notifications: {
    errors: []
  },
  user: {
    id: 2,
    name: "fake username",
    image_url: "profile_photo.jpg",
    location: "New York, NY",
    bio: "Lengthy bio text goes here",
    tracks: {
      1: {
        id: 1,
        name: "Track name",
        file: "track.mp3",
        image_url: "my_song_art.jpg",
        release_date: 01/01/2017,
        description: "lots of words about my song",
        genre: "rock",
        user_id: 2
      },
      2: {
        id: 2,
        name: "Another track",
        file: "another_track.mp3",
        image_url: "my_song_art.jpg",
        release_date: 01/02/2017,
        description: "Description of song",
        genre: "hip-hop",
        user_id: 2
      },
      ...
    },
    playlists: {
      1: {
        id: 1,
        title: "Playlist name",
        user_id: 2
      },
      2: {
        id: 2,
        title: "Work out Songs",
        user_id: 2
      },
      ...
    }
  },
  feed: {
    1: {
      id: 4,
      name: "Example track",
      file: "example.mp3",
      image_url: "example_art.jpg",
      genre: "rock",
      user_id: 2
    },
    2: {
      id: 2,
      name: "Another Track",
      file: "another_track.mp3",
      image_url: "my_song_art.jpg",
      genre: "hip-hop",
      user_id: 2
    },
    ...
  }
}
```
