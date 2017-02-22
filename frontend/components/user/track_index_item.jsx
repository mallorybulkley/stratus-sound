import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { receiveCurrentTrack, togglePlay } from '../../actions/current_track_actions';

class TrackIndexItem extends React.Component {

  handleClick () {
    if (this.props.currentTrack.track && this.props.currentTrack.track.id === this.props.track.id) {
      this.props.togglePlay();
    } else {
      this.props.receiveCurrentTrack(this.props.track);
    }
  }

  render () {
    const track = this.props.track;
    const currentTrack = this.props.currentTrack;
    const showDelete = this.props.currentUser.id === track.user.id;

    const togglePlayButton = (currentTrack.track && currentTrack.playing && currentTrack.track.id === track.id) ?
      (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

    return (
      <ul className="playlist-tracks" onClick={ this.handleClick.bind(this) }>
        <li>
          <img src={track.photo_url}/>
        </li>

        <li className="extra small-play" onClick={ this.handleClick.bind(this) }>
          { togglePlayButton }
        </li>

        <li>
          <Link to={`tracks/${track.id}`} onClick={ (e) => e.stopPropagation() }>
            {track.name}
          </Link>
        </li>

        { showDelete ?
          <button onClick={ console.log }>
            <i className="fa fa-trash-o" aria-hidden="true"/>
          </button>
          : "" }

      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  currentTrack: state.currentTrack,
  currentUser: state.session
});

const mapDispatchToProps = (dispatch) =>({
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  togglePlay: () => dispatch(togglePlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndexItem);
