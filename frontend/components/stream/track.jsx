import React from 'react';

const Track = ({ track }) => {
  return (
    <li>{track.name} by {track.user.username}
      <img src={track.photo_url}/>
    </li>
  );
};

export default Track;
