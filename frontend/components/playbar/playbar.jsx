import React from 'react';

class Playbar extends React.Component {
  componentWillMount () {
    this.props.fetchCurrentTrack();
  }

  render () {
    const track = this.props.track;
    if (!track.id) return (<div></div>);

    return (
      <section className="playbar">
        <audio controls>
          <source src={track.audio_url} type="audio/mpeg"/>
        </audio>

        <div className="track-info">
          <img src={ track.photo_url } />
          <ul>
            <li>
              <h4>{ track.user.username }</h4>
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
