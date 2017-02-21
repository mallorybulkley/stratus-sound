import React from 'react';
import UserInfo from './user_info';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';
import PlaylistButton from '../playlist/playlist_button';

class Track extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.fetchTrack();
    this.props.fetchPlaylistsIn(this.props.trackId);
  }

  handleClick () {
    if (this.isCurrentTrack()) {
      this.props.togglePlay();
    } else {
      this.props.fetchCurrentTrack(this.props.track.id);
    }
  }

  isCurrentTrack () {
    return this.props.currentTrack.track && (this.props.currentTrack.track.id === this.props.track.id);
  }

  render () {
    const track = this.props.track;
    if (!track.id) return (<div></div>);

    const togglePlayButton = this.isCurrentTrack() && this.props.currentTrack.playing ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

    const playlistsIn = this.playlistsIn.map((playlist) => (
      <ul>
        <li>
          { playlist.user.username }
        </li>
        <li>
          { playlist.title }
        </li>
      </ul>

    ))

    return (
      <section className="track">
        <section className="header">
            <div className="play" onClick={ this.handleClick.bind(this) }>
              { togglePlayButton }
            </div>
          <ul>
            <li>
              <h3>{ track.user ? track.user.username : "" }</h3>
            </li>
            <li>
              <h2>{ track.name }</h2>
            </li>
          </ul>
          <img src={track.photo_url}/>
        </section>

        <section className="track-nav">
          <CommentFormContainer trackId={track.id} />
          <PlaylistButton trackId={track.id} />
        </section>

        <section className="about">
          <UserInfo userId={track.user.id} />

          <ul>
            <li>{track.description}</li>
            <li><h5>Release Date:</h5> { new Date(track.release_date).toDateString().slice(4) }</li>

            <CommentIndexContainer trackId={track.id} />
          </ul>

          <section className="sidebar">
            <h4>In Playlists</h4>
            <ul>
              { playlistsIn }
            </ul>
          </section>
        </section>


      </section>
    );
  }
}

export default Track;
