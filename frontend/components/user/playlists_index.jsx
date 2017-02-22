import React from 'react';
import { Link } from 'react-router';

class PlaylistIndex extends React.Component {
  render () {
    if (!this.props.playlists) return (<div></div>);

    const playlists = this.props.playlists.map((playlist) => (
      <Link to={`playlists/${playlist.id}`} key={playlist.id}>
        <ul className="stream-tracks">
          <li>
            <img src={playlist.photo_url}/>
          </li>

          <li className="small-play">
            ( <i className="fa fa-play" aria-hidden="true"/> )
          </li>

          <ul>
            <li>
               <h4>{playlist.username}</h4>
            </li>
            <li>
              {playlist.title}
            </li>
          </ul>

        </ul>
      </Link>
    ));

    return (
      <ul className="user-track-list">
        { playlists }
      </ul>
    )
  }
}

export default PlaylistIndex;
