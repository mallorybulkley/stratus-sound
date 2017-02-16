import React from 'react';
import StreamIndexItem from './stream_index_item';

class Stream extends React.Component {
  constructor (props) {
    super(props);

    this.props.fetchTracks();
  }

  render () {
    const tracks = this.props.tracks.map((track) => (
      <StreamIndexItem track={track} key={track.id}/>
    ));

    return (
      <ul>
        { tracks }
      </ul>
    );
  }
}


export default Stream;
