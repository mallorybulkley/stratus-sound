import React from 'react';
import { Link } from 'react-router';

class PlaylistIndex extends React.Component {
  render () {
    if (!this.props.playlists) return (<div></div>);

    const playlists = this.props.playlists.map((playlist) => (
      <Link to={`playlists/${playlist.id}`} key={playlist.id}>
        <li>{ playlist.title }</li>
      </Link>
    ));

    return (
      <ul>
        { playlists }
      </ul>
    )
  }
}

export default PlaylistIndex;
