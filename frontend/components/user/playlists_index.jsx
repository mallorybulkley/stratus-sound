import React from 'react';
import { Link } from 'react-router';

class PlaylistIndex extends React.Component {
  render () {
    if (!this.props.playlists) return (<div></div>);

    const playlists = this.props.playlists.map((playlist) => (
        <ul className="stream-tracks" key={playlist.id}>
          <li>
            <Link to={`playlists/${playlist.id}`} key={playlist.id}>
              <img src={playlist.photo_url}/>
            </Link>
          </li>

          <li className="small-play" onClick={ () => this.props.receiveCurrentTrack(playlist.tracks[0], playlist.tracks) }>
            {
              (this.props.currentTrack.queue === playlist.tracks && this.props.currentTrack.playing) ?
              (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> )
            }
          </li>

          <ul>
            <li>
               <h4>{playlist.username}</h4>
            </li>
            <li>
              <Link to={`playlists/${playlist.id}`} key={playlist.id}>
                {playlist.title}
              </Link>
            </li>
          </ul>

        </ul>
    ));

    return (
      <ul className="user-track-list">
        { playlists }
      </ul>
    )
  }
}

export default PlaylistIndex;
