export const createPlaylist = (playlist) => {
  return $.ajax({
    type: 'POST',
    url: 'api/playlists',
    data: playlist
  });
};

export const fetchPlaylist = (id) => {
  return $.ajax({
    url: `api/playlists/${id}`
  });
};

export const fetchUserPlaylists = (user_id) => {
  return $.ajax({
    url: 'api/playlists',
    data: { user_id }
  });
};

export const fetchTrackPlaylists = (track_id) => {
  return $.ajax({
    url: 'api/playlists',
    data: { track_id }
  });
};

export const deletePlaylist = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/playlists/${id}`
  });
};

export const addTrackToPlaylist = (playlistId, trackId) => {
  return $.ajax({
    type: 'POST',
    url: 'api/playlist_tracks',
    data: {
      playlistId,
      trackId
    }
  })
}
