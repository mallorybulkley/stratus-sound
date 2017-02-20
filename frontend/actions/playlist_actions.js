import * as PlaylistApiUtil from '../util/playlist_api_util';
// import { receiveErrors } from './error_actions';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";

export const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const fetchPlaylist = (id) => (dispatch) => (
  PlaylistApiUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)))
);
