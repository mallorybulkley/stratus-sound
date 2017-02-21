import React from 'react';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);

    this.state = { view: "tracks" };
  }
  componentWillMount () {
    this.props.fetchUser();
    this.props.fetchUserPlaylists();
  }

  userDisplay () {
    <h1>hello user</h1>
  }

  render () {
    const user = this.props.user;

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
          <h1 className={ this.state.view === "create" ? "active" : "" }
            onClick={ () => this.setState({ view: "create" }) }>
            Playlists
          </h1>
        </section>

        
      </section>
    )
  }
}

export default UserProfile;
