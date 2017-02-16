import React from 'react';

const StreamIndexItem = ({ track }) => {
  return (
    <li>
      <img src={track.photo_url}/>
      {track.name} by {track.user.username}
      <audio controls>
        <source src={track.audio_url} type="audio/mpeg"/>
      </audio>
    </li>
  );
};

export default StreamIndexItem;
