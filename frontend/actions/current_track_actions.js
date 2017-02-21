export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
import * as TrackApiUtil from '../util/track_api_util';
import { receiveErrors } from './error_actions';

export const receiveCurrentTrack = (track) => ({
  type: RECEIVE_CURRENT_TRACK,
  track
});

export const togglePlay = () => ({
  type: TOGGLE_PLAY
})
