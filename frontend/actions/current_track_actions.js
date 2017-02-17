export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
import * as TrackApiUtil from '../util/track_api_util';
import { receiveErrors } from './error_actions';

export const receiveCurrentTrack = (track) => ({
  type: RECEIVE_CURRENT_TRACK,
  track
});

export const fetchCurrentTrack = (id) => (dispatch) => (
  TrackApiUtil.fetchTrack(id)
    .then(track => dispatch(receiveCurrentTrack(track)),
    data => dispatch(receiveErrors(data.responseJSON.errors)))
);

export const togglePlay = () => ({
  type: TOGGLE_PLAY
})
