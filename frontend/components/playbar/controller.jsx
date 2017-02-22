import React from 'react';

class Controller extends React.Component {
  constructor (props) {
    super(props)

    this.restartAudio = this.restartAudio.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleLoop = this.toggleLoop.bind(this);

    document.body.addEventListener('keypress', (e) => {
      if (e.key === " " && (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") ) {
        e.preventDefault();
        this.togglePlay();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.audio) return null;

    if (nextProps.playing) {
      this.props.audio.play();
    } else {
      this.props.audio.pause();
    }
  }

  restartAudio () {
    this.props.audio.pause();
    this.props.audio.currentTime = 0;
    this.props.audio.play();
  }

  togglePlay () {
    this.props.togglePlay();
  }

  toggleLoop () {
    this.props.audio.loop = !this.props.audio.loop;
  }

  render () {
    if (!this.props.audio) return null;

    const togglePlayButton = this.props.playing ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

    return (
      <ul className="controller">
        <li onClick={ this.restartAudio }>
          <i className="fa fa-step-backward" aria-hidden="true"/>
        </li>
        <li onClick={ this.togglePlay }>
          { togglePlayButton }
        </li>
        <li onClick={ this.props.playNextTrack }>
          <i className="fa fa-step-forward" aria-hidden="true"/>
        </li>

        <li onClick={ this.toggleLoop } className={ this.props.audio.loop === true ? "active" : "" }>
          <i className="fa fa-repeat" aria-hidden="true"/>
        </li>
      </ul>
    )
  }
}

export default Controller;
