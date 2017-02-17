<i class="fa fa-step-backward" aria-hidden="true"></i>
import React from 'react';

class Controller extends React.Component {
  constructor (props) {
    super(props)

    this.playing = true;

    this.restartAudio = this.restartAudio.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

  }

  restartAudio () {
    this.props.audio.pause();
    this.props.audio.currentTime = 0;
    this.props.audio.play();
  }

  togglePlay () {
    if (this.playing) {
      this.props.audio.pause();
      this.playing = false;
    } else {
      this.props.audio.play();
      this.playing = true;
    }
  }

  render () {
    if (!this.props.audio) return null;

    const togglePlayButton = this.playing ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

    return (
      <ul className="controller">
        <li onClick={ this.restartAudio }>
          <i className="fa fa-step-backward" aria-hidden="true"/>
        </li>
        <li onClick={ this.togglePlay }>
          { togglePlayButton }
        </li>
        <li onClick={(e) => console.log(e)}>
          <i className="fa fa-step-forward" aria-hidden="true"/>
        </li>

        <li>
          <i className="fa fa-repeat" aria-hidden="true"/>
        </li>
      </ul>
    )
  }
}

export default Controller;
