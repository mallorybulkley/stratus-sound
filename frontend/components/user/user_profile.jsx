import React from 'react';
import Modal from 'react-modal';
import { profileModalStyle } from '../../util/modal_style.js';
import PlaylistsIndex from './playlists_index';
import TracksIndex from './tracks_index'
import ProfileFormContainer from './profile_form_container';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);

    this.state = { view: "tracks", modal: false };

    Modal.setAppElement('#root');
  }

  openModal () {
    this.setState({ modal: true });
  }

  closeModal(){
    this.setState({ modal: false });
  }

  componentWillMount () {
    this.props.fetchUser();
    this.props.fetchUserTracks();
    this.props.fetchUserPlaylists();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.userId != this.props.user.id) {
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
            <li>
              <h3>{ user ? user.location : "" }</h3>
            </li>
          </ul>
          <img src={user ? user.photo_url : "" }/>
        </section>

        <section className="user-nav">
          <ul>
            <h1 className={ this.state.view === "tracks" ? "active" : "" }
              onClick={ () => this.setState({ view: "tracks" }) }>
              Tracks
            </h1>
            <h1 className={ this.state.view === "playlists" ? "active" : "" }
              onClick={ () => this.setState({ view: "playlists" }) }>
              Playlists
            </h1>
          </ul>

          { this.props.currentUser.id === this.props.user.id ?
            ( <a className="edit-button" onClick={() => this.openModal() }>
                <i className="fa fa-pencil" aria-hidden="true"/>
                Edit
              </a>
            ) : "" }
        </section>

        <section className="user-main">
          { this.state.view === "tracks" ?
            <TracksIndex
              tracks={this.props.tracks}
              togglePlay={this.props.togglePlay}
              currentTrack={this.props.currentTrack}
              receiveCurrentTrack={this.props.receiveCurrentTrack} /> :
              <PlaylistsIndex
                playlists={this.props.playlist}
                currentTrack={this.props.currentTrack}
                receiveCurrentTrack={this.props.receiveCurrentTrack} />
          }

          <section className="sidebar">
            <h4>Bio</h4>
            <ul>
              { user.bio }
            </ul>
          </section>
        </section>

        <Modal isOpen={this.state.modal}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Modal"
          style={profileModalStyle}>

          <section className="profile-form">
            <h1>
              Edit your Profile
            </h1>
          </section>

          <ProfileFormContainer
            closeModal={this.closeModal.bind(this)}
            user={this.props.user} />
        </Modal>

      </section>
    )
  }
}

export default UserProfile;
