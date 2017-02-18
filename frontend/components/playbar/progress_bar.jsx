import React from 'react';
import { formatDuration } from '../../util/format_util';

class ProgressBar extends React.Component {
  render () {
    const audio = this.props.audio;
    if (!audio) return null;

    const progress = formatDuration(Math.floor(audio.currentTime));
    const duration = formatDuration(Math.floor(audio.duration));

    return (
      <ul className="progress">
        <li id="currentTime">
          { progress }
        </li>

          <progress
            value={ audio.currentTime }
            max={ audio.duration } />
        <li>
          { duration }
        </li>
    </ul>
    )
  }
}

export default ProgressBar;
