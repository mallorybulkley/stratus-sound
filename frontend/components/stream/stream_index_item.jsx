import React from 'react';
import { Link } from 'react-router';
import Waveform from '../waveform/waveform';

const StreamIndexItem = ({ track, queue, receiveCurrentTrack, togglePlay, currentTrack }) => {
  if (!track.peaks) {
    return (<div></div>);
  }

  const handleClick = () => {
    if (currentTrack) {
      togglePlay();
    } else {
      receiveCurrentTrack(track, queue);
    }
  };

  const togglePlayButton = (currentTrack && currentTrack.playing) ? (
    <i className="fa fa-pause" aria-hidden="true"/>
  ) : (
    <i className="fa fa-play" aria-hidden="true"/>
  );

  return (
    <ul className="stream-tracks">
      <li>
        <Link to={`tracks/${track.id}`}>
          <img src={track.photo_url}/>
        </Link>
      </li>

      <li className="small-play" onClick={ handleClick }>
        { togglePlayButton }
      </li>

      <ul>
        <li>
          <Link to={`users/${track.user.id}`}>
            <h4>{track.user.username}</h4>
          </Link>
        </li>
        <li>
          <Link to={`tracks/${track.id}`}>
            {track.name}
          </Link>
        </li>
      </ul>

      <div>
        <i className="fa fa-play" aria-hidden="true"/>
        { track.play_count }
        <i className="fa fa-comment" aria-hidden="true"/>
        { track.comment_count }
      </div>

      <a onClick={ handleClick }>
        <Waveform track={ track } width="500" />
      </a>

    </ul>
  );
};

export default StreamIndexItem;
