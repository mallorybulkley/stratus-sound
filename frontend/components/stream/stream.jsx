import React from 'react';
import StreamIndexItem from './stream_index_item';

class Stream extends React.Component {
  constructor (props) {
    super(props);

    this.props.fetchTracks();
  }

  render () {
    const currentTrack = this.props.currentTrack;

    const tracks = this.props.tracks.map((track) => (
      <StreamIndexItem key={ track.id }
        track={ track }
        queue={ this.props.tracks }
        receiveCurrentTrack={ this.props.receiveCurrentTrack }
        togglePlay={ this.props.togglePlay }
        currentTrack={ currentTrack.track && currentTrack.track.id === track.id ? currentTrack : false } />
    ));

    return (
      <section className="stream">
        <ul className="stream-header">
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
