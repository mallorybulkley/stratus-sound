import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const fetchTracks = () => (dispatch) => (
  TrackApiUtil.fetchTracks()
  .then((data) => dispatch(receiveTracks(data)))
);
