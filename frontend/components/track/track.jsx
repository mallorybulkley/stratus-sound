import React from 'react';
import UserInfo from './user_info';

class Track extends React.Component {
  componentWillMount () {
    this.props.fetchTrack();
  }

  render () {
    const track = this.props.track;
    if (!track.id) return (<div></div>);

    return (
      <section className="track">
        <section className="header">
          <ul>
            <li>
              Play
            </li>
            <li>
              { track.user ? track.user.username : "" }
            </li>
            <li>
              { track.name }
            </li>
          </ul>
          <img src={track.photo_url}/>
        </section>

        <section className="about">
          <UserInfo userId={track.user.id} />

          <ul>
            <li>{track.description}</li>
            <li><h4>Release Date:</h4> { new Date(track.release_date).toDateString().slice(4) }</li>
          </ul>

          <section className="sidebar">
            <h3>More Tracks</h3>
            <div>more things will go here eventually</div>
          </section>
        </section>


      </section>
    );
  }
}

export default Track;
