import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import UserInfo from '../track/user_info';
import { Link, withRouter } from 'react-router';

class Playlist extends React.Component {
  constructor (props) {
    super(props);

    this.props.fetchPlaylist();
  }

  handleDelete (trackId) {
    if (this.props.playlist.tracks.length === 1) {
      this.props.deletePlaylistTrack(trackId).then( () => {
        this.props.router.push('/');
      });
    } else {
      this.props.deletePlaylistTrack(trackId);
    }
  }

  handleClick () {
    if (this.isPlaying()) {
      this.props.togglePlay();
    } else {
      this.props.receiveCurrentTrack(this.props.playlist.tracks[0], this.props.playlist.tracks);
    }
  }

  isPlaying () {
    return this.props.currentTrack.queue === this.props.playlist.tracks && this.props.currentTrack.playing && (
      this.props.playlist.tracks.some(track => track.id === this.props.currentTrack.track.id));
  }

  render () {
    if (!this.props.playlist.tracks) return (<div></div>);

    const tracks = this.props.playlist.tracks.map((track) => (
      <PlaylistIndexItem key={ track.id }
        track={ track }
        queue={ this.props.playlist.tracks }
        receiveCurrentTrack={ this.props.receiveCurrentTrack }
        togglePlay={ this.props.togglePlay }
        currentTrack={ this.props.currentTrack }
        showDelete={ this.props.playlist.user_id === this.props.currentUser.id }
        deletePlaylistTrack={ this.handleDelete.bind(this) } />
    ));

    const togglePlayButton = this.isPlaying() ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

    return (
      <section className="playlist">
        <section className="header" onClick={ this.handleClick.bind(this) } >
          <div className="play">
            { togglePlayButton }
          </div>
          <ul>
            <li>
              <Link to={`users/${this.props.playlist.user_id}`}>
                <h3>{ this.props.playlist.username ? this.props.playlist.username : "" }</h3>
              </Link>
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
            <h4>More</h4>
            ...
          </section>
        </section>
      </section>
    )
  }
}

export default withRouter(Playlist);
