import React from 'react';
import { connect } from 'react-redux';
import Playbar from './playbar';
import { fetchCurrentTrack } from '../../actions/current_track_actions';

const mapStateToProps = (state) => ({
  track: state.currentTrack
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
