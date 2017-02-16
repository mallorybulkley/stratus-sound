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
      <section className="stream">
        <ul className="header">
          <li><h1>Stream</h1></li>
        </ul>
        <ul className="tracks">
          { tracks }
        </ul>
      </section>
    );
  }
}


export default Stream;
