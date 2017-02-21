import React from 'react';
import { Link } from 'react-router';

const PlaylistIndexItem = ({ track, receiveCurrentTrack, togglePlay, currentTrack }) => {
  const handleClick = () => {
    if (currentTrack) {
      togglePlay();
    } else {
      receiveCurrentTrack(track);
    }
  }

  const togglePlayButton = (currentTrack && currentTrack.playing) ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

  return (
    <ul className="playlist-tracks">
      <li>
        <img src={track.photo_url}/>
      </li>

      <li className="extra small-play" onClick={ handleClick }>
        { togglePlayButton }
      </li>

      <ul>

        <li>
          <Link to={`tracks/${track.id}`}>
            {track.user.username} - {track.name}
          </Link>
        </li>
      </ul>

    </ul>
  );
};

export default PlaylistIndexItem;
