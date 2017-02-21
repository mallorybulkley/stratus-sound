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

export const fetchUserPlaylists = (userId) => {
  return $.ajax({
    url: 'api/playlists',
    data: { userId }
  });
};

export const fetchTrackPlaylists = (trackId) => {
  return $.ajax({
    url: 'api/playlists',
    data: { trackId }
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
