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
      this.props.fetchCurrentTrack(this.props.playlist.tracks[0].id);
    }
  }

  isPlaying () {
    false
    // return this.props.currentTrack.track && (this.props.playlist.tracks.includes(this.props.currentTrack.track.id);
  }

  render () {
    if (!this.props.playlist.tracks) return (<div></div>);

    const tracks = this.props.playlist.tracks.map((track) => (
      <PlaylistIndexItem key={ track.id }
        track={ track }
        fetchCurrentTrack={ this.props.fetchCurrentTrack }
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
              <h3>{ this.props.playlist.user ? this.props.playlist.user.username : "" }</h3>
            </li>
            <li>
              <h2>{ this.props.playlist.title }</h2>
            </li>
          </ul>
          <img src={this.props.playlist.tracks[0].photo_url}/>

        </section>



        <section className="playlist-main">
          <UserInfo userId={this.props.playlist.user.id} />

          <section className="playlist-track-list">
            { tracks }
          </section>

          <section className="sidebar">
            <h4>More Tracks</h4>
            <div>more things will go here eventually</div>
          </section>
        </section>
      </section>
    )
  }
}

export default Playlist;
