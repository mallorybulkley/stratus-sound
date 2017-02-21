import React from 'react';

class UserProfile extends React.Component {
  componentWillMount () {
    this.props.fetchUser();
    this.props.fetchUserPlaylists();
  }

  render () {
    const user = this.props.user;

    return (
      <section className="header">
        <ul>
          <li>
            <h3>{ user ? user.username : "" }</h3>
          </li>
        </ul>
        <img src={user ? user.photo_url : "" }/>
      </section>
    )
  }
}

export default UserProfile;
