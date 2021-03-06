import * as TrackApiUtil from '../util/track_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const START_LOADING = "START_LOADING";

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const startLoading = () => ({
  type: START_LOADING
})

export const fetchTrack = (id) => (dispatch) => (
  TrackApiUtil.fetchTrack(id)
    .then(track => dispatch(receiveTrack(track)))
);

export const uploadTrack = (track) => (dispatch) => {
  dispatch(startLoading())

  return TrackApiUtil.uploadTrack(track)
    .then(track => {
      dispatch(receiveTrack(track));
      return track;
      }, data => dispatch(receiveErrors(data.responseJSON.errors)))
};

export const updateTrack = (trackId, track) => (dispatch) => (
  TrackApiUtil.updateTrack(trackId, track)
    .then(track => dispatch(receiveTrack(track)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
);

export const deleteTrack = (id) => (dispatch) => (
  TrackApiUtil.deleteTrack(id)
    .then(() => dispatch(receiveTrack(null)))
);

export const savePeaks = (track) => (dispatch) => (
  TrackApiUtil.savePeaks(track)
    .then(track => dispatch(receiveTrack(track)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
);
