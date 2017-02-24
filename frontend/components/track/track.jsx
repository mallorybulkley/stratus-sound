import React from 'react';
import UserInfo from './user_info';
import TrackFormContainer from './track_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';
import PlaylistButton from '../playlist/playlist_button';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import { trackModalStyle } from '../../util/modal_style.js';

import Waveform from '../waveform/waveform';

class Track extends React.Component {
  constructor (props) {
    super(props)

    this.state = { modal: false };
  }

  componentWillMount () {
    this.props.fetchTrack();
    this.props.fetchTrackPlaylists();
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.track ? true : false;
  }

  openModal () {
    this.setState({ modal: true });
  }

  closeModal(){
    this.setState({ modal: false });
  }

  handleClick () {
    if (this.isCurrentTrack()) {
      this.props.togglePlay();
    } else {
      this.props.receiveCurrentTrack(this.props.track);
    }
  }

  isCurrentTrack () {
    return this.props.currentTrack.track && (this.props.currentTrack.track.id === this.props.track.id);
  }

  render () {
    const track = this.props.track;
    if (!track || !track.id) return (<div></div>);

    const togglePlayButton = this.isCurrentTrack() && this.props.currentTrack.playing ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

    const playlistList = (this.props.playlists instanceof Array ? this.props.playlists.map((playlist) => (
      <ul key={playlist.id}>
          <li>
            <Link to={`users/${playlist.user_id}`}>
              { playlist.username }
            </Link>
          </li>

          <li>
            <Link to={`playlists/${playlist.id}`}>
              <h5>{ playlist.title }</h5>
            </Link>
          </li>
      </ul>

    )) : "");

    return (
      <section className="track">
        <section className="header" onClick={ this.handleClick.bind(this) } >
            <div className="play">
              { togglePlayButton }
            </div>
          <ul>
            <li>
              <Link to={`users/${track.user.id}`} onClick={ (e) => e.stopPropagation()} >
                <h3>{ track.user ? track.user.username : "" }</h3>
              </Link>
            </li>
            <li>
              <h2>{ track.name }</h2>
            </li>
          </ul>

          <Waveform track={ track } width="500"/>

          <img src={track.photo_url}/>
        </section>

        <section className="track-nav">
          <CommentFormContainer trackId={track.id} />

          <div>
            { this.props.currentUser.id === track.user.id ?
              ( <a className="edit-button" onClick={ () => this.openModal() }>
                  <i className="fa fa-pencil" aria-hidden="true"/>
                  Edit
                </a>
              ) : "" }

            { this.props.currentUser.id === track.user.id ?
              ( <a className="edit-button" onClick={ () => {
                  this.props.deleteTrack().then(() => this.props.router.push('/'))
                } }>
                  <i className="fa fa-trash" aria-hidden="true"/>
                  Delete
                </a>
              ) : "" }

            <PlaylistButton trackId={track.id} currentUser={ this.props.currentUser } />
          </div>
        </section>

        <section className="about">
          <UserInfo userId={track.user.id} />

          <ul>
            <li>{track.description}</li>
            <li><h5>Release Date:</h5> { new Date(track.release_date).toDateString().slice(4) }</li>

            <CommentIndexContainer trackId={track.id} />
          </ul>

          <section className="sidebar">
            <h4>In Playlists</h4>
            <ul>
              { playlistList }
            </ul>
          </section>
        </section>

        <Modal isOpen={this.state.modal}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Modal"
          style={trackModalStyle}>

          <TrackFormContainer
            closeModal={this.closeModal.bind(this)}
            track={this.props.track} />
        </Modal>

      </section>
    );
  }
}

export default withRouter(Track);
