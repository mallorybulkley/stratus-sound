import React from 'react';
import { connect } from 'react-redux';
import { savePeaks } from '../../actions/track_actions';

class MyWaveform extends React.Component {
  constructor (props) {
    super(props);

    if (!this.props.track.peaks) {
      let request = new XMLHttpRequest();
      request.open('GET', this.props.track.audio_url, true);
      request.responseType = 'arraybuffer';

      request.addEventListener('load', () => {
        let context = window.audioContext;

        context.decodeAudioData(request.response).then((buffer) => {
          let channelData = buffer.getChannelData(0);
          let peaks = this.extractPeaks(channelData);
          this.props.savePeaks({ id: this.props.track.id, peaks: peaks });
        })
      });
      request.send();
    }
  }

  componentDidMount () {
    if (this.props.track.peaks) {
      this.draw(JSON.parse(this.props.track.peaks));
    }
  }

  extractPeaks (channelData) {
    let peaks = [];

    const step = Math.ceil(channelData.length / 700);

    for (let i = 0; i < this.props.width; i += 2) {
      let min = 1.0;
      let max = -1.0;

      for (let j = 0; j < step; j += 500) {
        let peak = channelData[(i * j) + j];
        if (peak < min) {
          min = peak;
        } else if (peak > max) {
          max = peak;
        }

        peaks.push([i, (1 + min) * 50, 1, Math.max(1, (max - min) * 50)]);
      }
    }

    this.draw(peaks);
    return JSON.stringify(peaks);
  }

  draw (peaks) {
    let ctx = this.canvas.getContext('2d');
    ctx.fillStyle = '#333333';
    peaks.forEach((peak) => {
      ctx.fillRect(...peak)
    });
  }

  render () {
    return (
      <canvas ref={ (ref) => this.canvas = ref }
        className="waveform"
        width={this.props.width}
        height="100"></canvas>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  savePeaks: (track) => dispatch(savePeaks(track))
});


export default connect(
  null,
  mapDispatchToProps
)(MyWaveform);
