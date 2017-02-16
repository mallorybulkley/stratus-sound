import React from 'react';

class Track extends React.Component {
  componentWillMount () {
    this.props.fetchTrack();
  }

  render () {
    const track = this.props.track;

    return (
      <section className="track">
        <img src={track.photo_url}/>
        {track.name} by {track.user ? track.user.username : ""}
        <audio controls>
          <source src={track.audio_url} type="audio/mpeg"/>
        </audio>
      </section>
    );
  }
}

export default Track;
