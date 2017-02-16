import React from 'react';
import { Link } from 'react-router';

const StreamIndexItem = ({ track }) => {
  return (
    <ul className="stream-tracks">
      <li>
        <Link to={`tracks/${track.id}`}>
          <img src={track.photo_url}/>
        </Link>
      </li>

      <li className="small-play">
        Play
      </li>

      <li>
        <li>
           <h4>{track.user.username}</h4>
        </li>
        <li>
          {track.name}
        </li>
      </li>

    </ul>
  );
};

export default StreamIndexItem;


  // <li>
  //   <audio controls>
  //     <source src={track.audio_url} type="audio/mpeg"/>
  //   </audio>
  // </li>
