import React from 'react';
import TrackIndexItem from './track_index_item';

class TracksIndex extends React.Component {
  render () {
    if (!this.props.tracks) return (<div></div>);

    const trackItems = this.props.tracks.map((track) => (
      <TrackIndexItem track={ track } key={track.id}/>
    ));

    return (
      <section className="playlist-track-list">
        { trackItems }
      </section>
    )
  }
}

export default TracksIndex;
