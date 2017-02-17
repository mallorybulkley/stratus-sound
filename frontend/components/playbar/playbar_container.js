import React from 'react';
import { connect } from 'react-redux';
import Playbar from './playbar';
import { fetchCurrentTrack, togglePlay } from '../../actions/current_track_actions';

const mapStateToProps = (state) => ({
  track: state.currentTrack.track,
  playing: state.currentTrack.playing
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id)),
  togglePlay: () => dispatch(togglePlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
