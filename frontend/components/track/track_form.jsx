import React from 'react';
import { withRouter, Link } from 'react-router';

const GENRES = [
  "Ambient",
  "Classical",
  "Country",
  "Disco",
  "Electronic",
  "Folk",
  "Hip-hop",
  "Indie",
  "Jazz",
  "Metal",
  "Rock"
];

class TrackForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "",
      release_date: "",
      genre: "",
      description: "",
      audioFile: null,
      photoFile: null,
      photo_url: null
    };

    if (this.props.track) this.state = this.props.track;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.createTrack = this.createTrack.bind(this);
  }

  createTrack () {
    var formData = new FormData();

    formData.append("track[name]", this.state.name);
    formData.append("track[release_date]", this.state.release_date);
    formData.append("track[genre]", this.state.genre);
    formData.append("track[description]", this.state.description);
    formData.append("track[user_id]", this.props.currentUser.id);

    if (this.state.photoFile) {
      formData.append("track[photo]", this.state.photoFile);
    }

    if (this.state.audioFile) {
      formData.append("track[audio]", this.state.audioFile);
    }

    return formData;
  }

  handleSubmit (e) {
    e.preventDefault();

    if (this.props.track) {
      this.props.updateTrack(this.props.track.id, this.createTrack());
      this.props.closeModal();
    } else {
      this.props.uploadTrack(this.createTrack())
      .then((track) => {
        this.props.router.push(`tracks/${track.id}`);
      });
    }
  }

  updateAudio (e) {
    const audio = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ audioFile: audio });
    };

    if (audio) {
      fileReader.readAsDataURL(audio)
    }
  }

  updatePhoto (e) {
    const photo = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ photoFile: photo, photo_url: fileReader.result });
    };

    if (photo) {
      fileReader.readAsDataURL(photo)
    }
  }

  updateProperty (property) {
    return (e) => (
      this.setState({ [property]: e.target.value })
    );
  }

  render () {
    if (this.props.loading) return (
      <div className="loading">
        <h1>Uploading...</h1>
        <i className="fa fa-spinner" aria-hidden="true"/>
      </div>
    );

    const errors = this.props.errors.map((err, idx) => (
      <li key={idx}>{err}</li>
    ));

    const genres = GENRES.map((genre, idx) => (
      <option value={genre} key={idx}>{genre}</option>
    ))

    const text = this.props.track ? "Edit Track" : "Upload to StratusSound";

    return (
      <section className="upload">
        <header>{text}</header>

        <section className="upload form">
          <section className="image">
            <img src={this.state.photo_url} />
            <label><i className="fa fa-camera" aria-hidden="true"/>Choose image
              <input type="file"
                onChange={this.updatePhoto} />
            </label>
          </section>
          <form
            onSubmit={this.handleSubmit}>

            <section className="errors">{ errors }</section>

            <label>Title</label>

            <input type="text"
              value={this.state.name}
              onChange={this.updateProperty("name")}
              placeholder="Name your track" />

            <label>Release Date</label>
            <input type="date"
              value={this.state.release_date}
              onChange={this.updateProperty("release_date")} />

            <label>Genre</label>
            <select onChange={this.updateProperty("genre")}
              defaultValue={ this.state.genre || "select" } >
              <option disabled value="select">Select</option>
              { genres }
            </select>

            Audio
            <label className="audio"><i className="fa fa-microphone" aria-hidden="true"/>Choose a file to upload
              <input type="file"
              onChange={this.updateAudio} />
            </label>

            <textarea
              value={this.state.description}
              placeholder="Describe your track"
              onChange={this.updateProperty("description")}></textarea>

            <div>
              <Link to="/">Cancel</Link>
              <button className="small orange">Save</button>
            </div>
          </form>
        </section>

      </section>
    )
  }
}

export default withRouter(TrackForm);
