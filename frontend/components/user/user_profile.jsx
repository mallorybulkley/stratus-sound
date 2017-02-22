import React from 'react';
import PlaylistsIndex from './playlists_index';
import TracksIndex from './tracks_index'

class UserProfile extends React.Component {
  constructor (props) {
    super(props);

    this.state = { view: "tracks" };
  }

  componentWillMount () {
    this.props.fetchUser();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      this.props.fetchUser();
      this.props.fetchUserTracks();
      this.props.fetchUserPlaylists();
    }
  }

  render () {
    const user = this.props.user;
    if (!user) return (<div></div>);

    return (
      <section className="user-profile">
        <section className="header">
          <ul>
            <li>
              <h2>{ user ? user.username : "" }</h2>
            </li>
          </ul>
          <img src={user ? user.photo_url : "" }/>
        </section>

        <section className="user-nav">
          <h1 className={ this.state.view === "tracks" ? "active" : "" }
            onClick={ () => this.setState({ view: "tracks" }) }>
            Tracks
          </h1>
          <h1 className={ this.state.view === "playlists" ? "active" : "" }
            onClick={ () => this.setState({ view: "playlists" }) }>
            Playlists
          </h1>
        </section>

        { this.state.view === "tracks" ?
          <TracksIndex tracks={this.props.tracks} /> :
            <PlaylistsIndex playlists={this.props.playlist}/>
        }

      </section>
    )
  }
}

export default UserProfile;
