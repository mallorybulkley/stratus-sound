import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import UserInfo from '../track/user_info';

class Playlist extends React.Component {
  constructor (props) {
    super(props);

    this.props.fetchPlaylist();
  }

  handleClick () {
    if (this.isPlaying()) {
      this.props.togglePlay();
    } else {
      this.props.receiveCurrentTrack(this.props.playlist.tracks[0]);
    }
  }

  isPlaying () {
    // debugger
    return this.props.currentTrack.playing && (
      this.props.playlist.tracks.some(track => track.id === this.props.currentTrack.track.id));
  }

  render () {
    if (!this.props.playlist.tracks) return (<div></div>);

    const tracks = this.props.playlist.tracks.map((track) => (
      <PlaylistIndexItem key={ track.id }
        track={ track }
        receiveCurrentTrack={ this.props.receiveCurrentTrack }
        togglePlay={ this.props.togglePlay }
        currentTrack={ this.props.currentTrack.track && this.props.currentTrack.track.id === track.id ? this.props.currentTrack : false } />
    ));

    const togglePlayButton = this.isPlaying() ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

    return (
      <section className="playlist">
        <section className="header">
          <div className="play" onClick={ this.handleClick.bind(this) }>
            { togglePlayButton }
          </div>
          <ul>
            <li>
              <h3>{ this.props.playlist.username ? this.props.playlist.username : "" }</h3>
            </li>
            <li>
              <h2>{ this.props.playlist.title }</h2>
            </li>
          </ul>
          <img src={this.props.playlist.tracks[0].photo_url}/>

        </section>

        <section className="playlist-main">
          <UserInfo userId={this.props.playlist.user_id} />

          <section className="playlist-track-list">
            { tracks }
          </section>

          <section className="sidebar">
            <h4>More Tracks</h4>
            <ul>
              ...more later...
            </ul>
          </section>
        </section>
      </section>
    )
  }
}

export default Playlist;
