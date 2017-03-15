import React from 'react';
import StreamIndexItem from './stream_index_item';
import Waypoint from 'react-waypoint';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = { page: 1 }

    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  componentDidMount () {
    this.props.fetchTracks();
  }

  handleInfiniteLoad () {
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.fetchScrollTracks(this.state.page);
    });
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
        <Waypoint onEnter={ this.handleInfiniteLoad } />
      </section>
    );
  }
}


export default Stream;
