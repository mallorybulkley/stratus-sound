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

export const fetchScrollTracks = (page) => {
  return $.ajax({
    url: 'api/tracks',
    data: { page }
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

export const recordLike = (trackId) => {
  return $.ajax({
    type: 'POST',
    url: `/api/tracks/${trackId}/like`
  });
}

export const unlike = (trackId) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/tracks/${trackId}/like`
  });
}
