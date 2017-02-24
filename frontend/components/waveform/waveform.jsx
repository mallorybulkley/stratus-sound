import React from 'react';

class MyWaveform extends React.Component {
  constructor (props) {
    super(props);

    let request = new XMLHttpRequest();
    request.open('GET', this.props.track.audio_url, true);
    request.responseType = 'arraybuffer';

    request.addEventListener('load', () => {
      let context = window.audioContext;

      context.decodeAudioData(request.response).then((buffer) => {
        let channelData = buffer.getChannelData(0);
        let peaks = this.extractPeaks(channelData);
      })
    });
    request.send();
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

    this.peaks = peaks;
    this.draw();
    console.log("DONE");
  }

  draw () {
    let ctx = this.canvas.getContext('2d');
    ctx.fillStyle = '#333333';
    this.peaks.forEach((peak) => {
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
// <Waveform buffer={this.state.buffer} width={720} color='#333333'/>

export default MyWaveform;
