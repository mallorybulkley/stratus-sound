export const uploadTrack = (track) => {
  return $.ajax({
    type: 'POST',
    url: 'api/tracks',
    data: {
      track
    }
  });
};

export const fetchTracks = () => {
  return $.ajax({
    url: 'api/tracks',
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
