import React from 'react';
import { connect } from 'react-redux';
import Playbar from './playbar';
import { receiveCurrentTrack, togglePlay } from '../../actions/current_track_actions';

const mapStateToProps = (state) => ({
  track: state.currentTrack.track,
  playing: state.currentTrack.playing,
  queue: state.currentTrack.queue
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  togglePlay: () => dispatch(togglePlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
