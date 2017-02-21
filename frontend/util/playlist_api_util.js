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

export const fetchPlaylists = () => {
  return $.ajax({
    url: 'api/playlists/'
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
