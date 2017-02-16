import React from 'react';
import { Link } from 'react-router';

const StreamIndexItem = ({ track }) => {
  return (
    <li>
      <Link to={`tracks/${track.id}`}>
        <img src={track.photo_url}/>
        {track.name} by {track.user.username}
      </Link>
      <audio controls>
        <source src={track.audio_url} type="audio/mpeg"/>
      </audio>
    </li>
  );
};

export default StreamIndexItem;
