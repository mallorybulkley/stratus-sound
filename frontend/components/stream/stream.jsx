import React from 'react';
import Track from './track';

class Stream extends React.Component {
  constructor (props) {
    super(props);

    this.props.fetchTracks();
  }

  render () {
    const tracks = this.props.tracks.map((track) => (
      <Track track={track} key={track.id}/>
    ));

    return (
      <ul>
        { tracks }
      </ul>
    );
  }
}


export default Stream;
