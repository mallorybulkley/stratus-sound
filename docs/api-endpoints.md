# API Endpoints

## HTML
### Root
* `GET /` - main app

## JSON
### Users

* `GET /api/users`
* `POST /api/users` - create account
* `PATCH /api/users` - edit account info

### Session

* `POST /api/session` - log in
* `DELETE /api/session` - log out

### Tracks

* `GET /api/tracks`
* `POST /api/tracks` - upload new track
* `PATCH /api/tracks/:id` - edit track
* `DELETE /api/tracks/:id` - delete track

### Playlists

* `GET /api/playlists`
* `POST /api/playlists` - create new playlist
* `PATCH /api/playlists/:id` - edit playlist
* `DELETE /api/playlists/:id` - delete playlist

### Plays

* `GET /api/plays` - get track play count & user play history
* `POST /api/plays` - add play

### Comments
* `GET /api/tracks/:id/comments` - get all comments for a track
* `POST /api/tracks/:id/comments` - create comment
* `DELETE /api/tracks/:id/comments/:id` - delete comment
