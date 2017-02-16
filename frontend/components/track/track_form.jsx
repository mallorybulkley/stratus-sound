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
      photoUrl: null
    };

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
    this.props.uploadTrack(this.createTrack())
      .then(() => {
        this.props.router.push('/');
      });
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
      this.setState({ photoFile: photo, photoUrl: fileReader.result });
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
    const errors = this.props.errors.map((err, idx) => (
      <li key={idx}>{err}</li>
    ));

    const genres = GENRES.map((genre) => (
      <option value={genre}>{genre}</option>
    ))

    return (
      <section className="upload">
        <header>Upload to StratusSound</header>

        <section className="upload form">
          <section className="image">
            <img src={this.state.photoUrl} />
            <input type="file"
            onChange={this.updatePhoto} />
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
            <select onChange={this.updateProperty("genre")} >
              <option disabled>Select</option>
              { genres }
            </select>

            Audio
            <input type="file"
              onChange={this.updateAudio} />

            <textarea
              value={this.state.description}
              placeholder="Describe your track"
              onChange={this.updateProperty("description")}></textarea>

            <div>
              <Link to="/">Cancel</Link>
              <button onClick={this.handleSubmit} className="small orange">Save</button>
            </div>
          </form>
        </section>

      </section>
    )
  }
}

export default withRouter(TrackForm);
