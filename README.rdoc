# Stratus Sound
[Stratus Sound live][heroku]

[heroku]: http://stratus-sound.herokuapp.com/

Stratus Sound is a full stack web application for streaming and sharing music. It utilizes Ruby on Rails with a PostgreSQL database on the backend, and React.js and Redux on the frontend.

## Features & Implementation

### Audio Waveforms
The first time a track is viewed, the audio file is asynchronously decoded. After the audio is decoded, sample points of the resulting `AudioBuffer`'s `channelData` are extracted and used to draw the waveform on a Canvas element. Finally, since extracting the peaks from an `AudioBuffer` can be a time consuming process, the array of audio peaks is saved to the database as a JSON string. Upon subsequent renders of the track, the waveform draws instantly without having to re-process the audio data.

### Music Playback
When a user clicks a track to play, a `Playbar` component is rendered. This component fetches the audio file (hosted with Amazon Web Services) and begins playback. The controls on the Playbar allow users to pause, play, loop, restart and skip tracks. The current track and the song queue are stored in the app's state, allowing the user to navigate through the app with continuous audio playback. Users are also able to control the current song's play/pause state using the space bar, or by clicking any of the play buttons or waveforms throughout the app.

## Future Plans
### Improved search
Stratus Sound currently uses pg_search to allow users to search for tracks, users and playlists at the same time. The search is configured to use both full text and trigram search, meaning that close/partial matches will also be returned as results. I plan to implement custom `pg_search_scope`s for Tracks to also allow search by genre and descriptions.

### Following
I plan to allow users to follow their favorite users. The **Stream** will then reflect updates from followed users, while a separate **Discover** feed will allow users to explore and find tracks from other users.
