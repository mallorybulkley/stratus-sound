import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACK = "RECEIVE_TRACK";

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const fetchTrack = (id) => (dispatch) => (
  TrackApiUtil.fetchTrack(id)
    .then(track => dispatch(receiveTrack(track)))
);
