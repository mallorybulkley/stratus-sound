import React from 'react';
// import Waveform from 'react-waveform'


const Waveform = React.createClass({
  getDefaultProps: function () {
    return {
      buffer: null,
      width: 500,
      height: 100,
      zoom: 1,
      color: 'black'
    };
  },
  componentDidMount: function () {
    var width = this.props.width * this.props.zoom;
    var middle = this.props.height / 2;

    var channelData = this.props.buffer.getChannelData(0);
    var step = Math.ceil(channelData.length / width);

    var ctx = this.canvas.getContext('2d');
    ctx.fillStyle = this.props.color;
    this.draw(width, step, middle, channelData, ctx);
  },
  draw: function (width, step, middle, data, ctx) {
    for (var i = 0; i < width; i += 1) {
      var min = 1.0;
      var max = -1.0;

      for (var j = 0; j < step; j += 1) {
        var datum = data[(i * step) + j];

        if (datum < min) {
          min = datum;
        } else if (datum > max) {
          max = datum;
        }

        ctx.fillRect(i, (1 + min) * middle, 1, Math.max(1, (max - min) * middle));
      }
    }
  },
  render: function () {
    return (
      <canvas
        ref={ (ref) => this.canvas = ref }
        className="waveform"
        width={this.props.width * this.props.zoom}
        height={this.props.height}></canvas>
      );
  }
});


class MyWaveform extends React.Component {
  constructor (props) {
    super(props);

    this.state = { buffer: [] };

    if (!this.props.track.buffer) {
      var request = new XMLHttpRequest();
      request.open('GET', this.props.track.audio_url, true);
      request.responseType = 'arraybuffer';

      request.addEventListener('load', () => {
        var context = new (window.AudioContext || window.webkitAudioContext)();

        context.decodeAudioData(request.response).then((buffer) => {
          this.setState({buffer: buffer });
          console.log(buffer);
        })
      });
      request.send();
    }
  }

  render () {
    if (!this.state.buffer.length) return (<div></div>);
    return (
      <Waveform buffer={this.state.buffer} width={720} color='#333333'/>
    )
  }
}

export default MyWaveform;
