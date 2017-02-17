import React from 'react';
import UserInfo from './user_info';

class Track extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.fetchTrack();
  }

  handleClick () {
    if (this.isCurrentTrack()) {
      this.props.togglePlay();
    } else {
      this.props.fetchCurrentTrack(this.props.track.id);
    }
  }

  isCurrentTrack () {
    return this.props.currentTrack.track && (this.props.currentTrack.track.id === this.props.track.id);
  }

  render () {
    const track = this.props.track;
    if (!track.id) return (<div></div>);

    const togglePlayButton = this.isCurrentTrack() && this.props.currentTrack.playing ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

    return (
      <section className="track">
        <section className="header">
            <div className="play" onClick={ this.handleClick.bind(this) }>
              { togglePlayButton }
            </div>
          <ul>
            <li>
              <h3>{ track.user ? track.user.username : "" }</h3>
            </li>
            <li>
              <h2>{ track.name }</h2>
            </li>
          </ul>
          <img src={track.photo_url}/>
        </section>

        <section className="about">
          <UserInfo userId={track.user.id} />

          <ul>
            <li>{track.description}</li>
            <li><h5>Release Date:</h5> { new Date(track.release_date).toDateString().slice(4) }</li>
          </ul>

          <section className="sidebar">
            <h4>More Tracks</h4>
            <div>more things will go here eventually</div>
          </section>
        </section>


      </section>
    );
  }
}

export default Track;
