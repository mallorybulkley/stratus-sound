export const uploadTrack = (track) => {
  return $.ajax({
    type: 'POST',
    url: 'api/tracks',
    contentType: false,
    processData: false,
    data: track
  });
};

export const updateTrack = (trackId, track) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/tracks/${trackId}`,
    contentType: false,
    processData: false,
    data: track
  });
};

export const fetchTracks = () => {
  return $.ajax({
    url: 'api/tracks',
  });
};

export const fetchScrollTracks = (pageOffset) => {
  return $.ajax({
    url: 'api/tracks',
    data: pageOffset
  });
};

export const fetchTrack = (id) => {
  return $.ajax({
    url: `api/tracks/${id}`,
  });
};

export const deleteTrack = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/tracks/${id}`
  });
};

export const fetchPlaylistTracks = (playlistId) => {
  return $.ajax({
    url: 'api/tracks',
    data: {
      playlistId
    }
  });
};

export const fetchUserTracks = (userId) => {
  return $.ajax({
    url: 'api/tracks',
    data: {
      userId
    }
  });
};

export const savePeaks = (track) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: {
      track
    }
  });
};

export const recordPlay = (trackId) => {
  return $.ajax({
    type: 'POST',
    url: `/api/tracks/${trackId}/play`
  });
}
