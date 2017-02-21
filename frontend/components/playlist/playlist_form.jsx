import React from 'react';

class PlaylistForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { title: "" };
  }

  updateTitle (e) {
    this.setState({ title: e.target.value });
  }

  render () {
    if (this.props.formType === "add") {
      const playlists = this.props.currentUser.playlists.map((playlist) => (
        <li key={playlist.id}>
          { playlist.title }
          <a className="add-button" onClick={() => this.props.addTrackToPlaylist(playlist.id, this.props.trackId) }>
            Add to Playlist
          </a>
        </li>
      ))

      return (
      <section className="playlist-form">
        <ul>
          { playlists }
        </ul>
      </section>
      )
    } else {
      return (
        <section className="playlist-form">
          <label>Playlist Title
            <input type="text" value={ this.state.title } onChange={ this.updateTitle.bind(this) }/>
              <button onClick={ () => this.props.createPlaylist(this.state) } className="small orange">Save</button>
          </label>
        </section>
      )
    }
  }
}

export default PlaylistForm;
