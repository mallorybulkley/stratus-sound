#Component Hierarchy

**HomeContainer**
* Nav
* Tracks feed (GET, Feed)
* Sidebar
  * User suggestions
  * Listening history
* Play bar (PlaybarContainer)

**Nav**
* SearchContainer
* Upload button (TrackFormContainer)
* Profile dropdown
  * view profile
  * view likes
  * log out

**Feed**
* Tracks or playlists (data received as props)

**PlaybarContainer**
* Play buttons (change state of currentTrack)
* Progress bar
  * Current time
  * Song length
* Track info
* Like button (POST)

**SearchContainer**
* Search results dropdown display (GET)

**AuthFormContainer**
* Sign up / log in form (POST)

**ProfileContainer**
* UserHeader
  * Header photo
  * Profile picture
  * Username
* ProfileNav
  * links to tracks/playlists
  * edit button (EditProfileContainer)
* Track or playlist Feed (GET, Feed)
* Sidebar
  * User stats
  * Likes

**EditProfileContainer**
* Edit profile form (PATCH)

**TrackFormContainer**
* File upload
* Track info form (POST/PATCH/DELETE)

**TrackContainer**
* Header
  * Image
  * Play button (change currentTrack)
  * Artist/user name
  * Track name
  * Waveform
* Comment box (POST)
* Track nav bar
  * Like button (POST/DELETE)
  * Track stats
    * Play count
    * Like count
* Track left sidebar
  * Image
  * Release date
* Track description
* CommentsContainer (GET)
* Sidebar
  * User info
  * Likes
  * Included in Playlists

**PlaylistContainer**
* Header image
* Like button (POST)
* Track feed (GET)
* Sidebar
  * User info
  * Likes

**CommentContainer**
* Comment display
  * User photo
  * Username
  * Body
  * Timestamp
* Delete button (DELETE)


#Routes
Path            | Component
----------------|-------------------
/               | HomeContainer
/signup         | AuthFormContainer
/login          | AuthFormContainer
/user/:id       | Profile
/user/:id/edit  | EditProfileContainer
/upload         | TrackFormContainer
/tracks/:id     | TrackContainer
/tracks/:id/edit| TrackFormContainer
/playlists/:id  | PlaylistContainer
