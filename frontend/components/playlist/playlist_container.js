import React from 'react';
import { connect } from 'react-redux';
import Playlist from './playlist';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchCurrentTrack, togglePlay } from '../../actions/current_track_actions';

const mapStateToProps = (state) => ({
  playlist: state.playlist,
  currentTrack: state.currentTrack
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPlaylist: () => dispatch(fetchPlaylist(ownProps.params.playlistId)),
  fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id)),
  togglePlay: () => dispatch(togglePlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
