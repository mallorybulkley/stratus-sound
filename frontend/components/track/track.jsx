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
            <li>{track.release_date}</li>
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
