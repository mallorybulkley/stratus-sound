import React from 'react';
import { formatDuration } from '../../util/format_util';

class ProgressBar extends React.Component {
  componentDidMount () {
    // setInterval(() => this.render(), 1000);
  }

  render () {
    if (!this.props.time) return null;

    const progress = formatDuration(Math.floor(this.props.time));
    const duration = formatDuration(Math.floor(this.props.audio.duration));

    return (
      <ul className="progress">
        <li id="currentTime">
          { progress }
        </li>

          <progress
            value={ this.props.audio.currentTime }
            max={this.props.audio.duration} />

        <li>
          { duration }
        </li>
    </ul>
    )
  }
}

export default ProgressBar;
