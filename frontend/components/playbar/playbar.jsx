import React from 'react';
import { Link } from 'react-router';
import ProgressBar from './progress_bar';
import Controller from './controller';
import { formatDuration } from '../../util/format_util';

class Playbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: null
    };
  }

  updateProgress () {
    this.setState({ currentTime: this.audioTag.currentTime })
  }

  playNextTrack () {
    const currentIndex = this.props.queue.findIndex(track => track.id === this.props.track.id);
    this.props.receiveCurrentTrack(this.props.queue[currentIndex + 1]);
  }

  render () {
    const track = this.props.track;
    if (!track || !track.user) return (<div></div>);

    return (
      <section className="playbar">

        <audio id='audio' autoPlay preload="auto" src={track.audio_url} type="audio/mpeg"
          ref={ (tag) => this.audioTag = tag }
          onTimeUpdate={ this.updateProgress.bind(this) }
          onEnded={ this.playNextTrack.bind(this) }
        />

        <Controller
          audio={ this.audioTag }
          playing={this.props.playing}
          togglePlay={this.props.togglePlay}
          playNextTrack={this.playNextTrack.bind(this)} />

        <ProgressBar audio={ this.audioTag }/>

        <div className="track-info">
          <img src={ track.photo_url } />
          <ul>
            <li>
              <Link to={`users/${track.user.id}`}>
                <h4>{ track.user.username }</h4>
              </Link>
            </li>
            <li>
              { track.name }
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Playbar;
