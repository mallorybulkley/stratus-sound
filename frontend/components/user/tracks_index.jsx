import React from 'react';
import StreamIndexItem from '../stream/stream_index_item';

class TracksIndex extends React.Component {
  render () {
    if (!this.props.tracks) return (<div></div>);

    const tracks = this.props.tracks.map((track) => (
      <StreamIndexItem key={ track.id }
        track={ track }
        queue={ this.props.tracks }
        receiveCurrentTrack={ this.props.receiveCurrentTrack }
        togglePlay={ this.props.togglePlay }
        currentTrack={ this.props.currentTrack.track && this.props.currentTrack.track.id === track.id ? this.props.currentTrack : false } />
    ));

    return (
      <section className="user-track-list">
        { tracks }
      </section>
    )
  }
}

export default TracksIndex;
