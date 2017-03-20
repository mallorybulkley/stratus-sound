import * as PlaylistApiUtil from '../util/playlist_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_NEW_PLAYLIST = "RECEIVE_NEW_PLAYLIST";

export const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receiveNewPlaylist = (playlist) => ({
  type: RECEIVE_NEW_PLAYLIST,
  playlist
})

export const fetchPlaylist = (id) => (dispatch) => (
  PlaylistApiUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)))
);

export const createPlaylist = (playlist, trackId) => (dispatch) => (
  PlaylistApiUtil.createPlaylist(playlist)
    .then(playlist => {
      PlaylistApiUtil.addTrackToPlaylist(playlist.id, trackId);
      dispatch(receiveNewPlaylist(playlist));
      },
      data => dispatch(receiveErrors(data.responseJSON.errors)))
);

export const fetchTrackPlaylists = (trackId) => (dispatch) => {
  return PlaylistApiUtil.fetchTrackPlaylists(trackId)
    .then(playlists => dispatch(receivePlaylists(playlists)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
};

export const fetchUserPlaylists = (userId) => (dispatch) => {
  return PlaylistApiUtil.fetchUserPlaylists(userId)
    .then(playlists => dispatch(receivePlaylists(playlists)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
};

export const addTrackToPlaylist = (playlistId, trackId) => (dispatch) => {
  return PlaylistApiUtil.addTrackToPlaylist(playlistId, trackId)
    .then(playlist => dispatch(receiveNewPlaylist(playlist)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
};

export const deletePlaylistTrack = (playlistId, trackId) => (dispatch) => {
  return PlaylistApiUtil.deletePlaylistTrack(playlistId, trackId)
    .then(playlist => dispatch(receivePlaylist(playlist)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
};

export const recordLike = (playlistId) => (dispatch) => {
  return PlaylistApiUtil.recordLike(playlistId)
    .then(playlist => dispatch(receivePlaylist(playlist)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
};

export const unlike = (playlistId) => (dispatch) => {
  return PlaylistApiUtil.unlike(playlistId)
    .then(playlist => dispatch(receivePlaylist(playlist)),
      data => dispatch(receiveErrors(data.responseJSON.errors)))
};
