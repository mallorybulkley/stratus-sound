import React from 'react';

const Track = ({ track }) => {
  return (
    <li>{track.name} by {track.user.username}
    </li>
  );
};

export default Track;
