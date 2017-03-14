import React from 'react';
import StreamIndexItem from './stream_index_item';
import Infinite from 'react-infinite';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = { offset: 0 }

    this.props.fetchScrollTracks(this.state.pageId);
  }

  handleInfiniteLoad () {
    console.log(this.state.offset);
    let newOffset = this.state.offset + 1;
    this.setState({ offset: newOffset });
    this.props.fetchScrollTracks(this.state.offset);
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
          <Infinite
            elementHeight={166}
            useWindowAsScrollContainer
            infiniteLoadBeginEdgeOffset={1660}
             onInfiniteLoad={ this.handleInfiniteLoad.bind(this) }>
            { tracks }
          </Infinite>
        </ul>
      </section>
    );
  }
}


export default Stream;
