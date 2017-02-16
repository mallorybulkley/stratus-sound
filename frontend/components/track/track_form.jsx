import React from 'react';
import { withRouter } from 'react-router';

class TrackForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "",
      release_date: "",
      genre: "",
      audioFile: null,
      photoFile: null,
      photoUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.createTrack = this.createTrack.bind(this);
  }

  createTrack () {
    var formData = new FormData();

    formData.append("track[name]", this.state.name);
    formData.append("track[release_date]", this.state.release_date);
    formData.append("track[genre]", this.state.genre);
    formData.append("track[user_id]", this.props.currentUser.id);
    if (this.state.photoFile) {
      formData.append("track[photo]", this.state.photoFile);
    }
    // formData.append("track[audio]", this.state.audioFile);
    return formData;
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.uploadTrack(this.createTrack())
      .then(() => {
        this.props.router.push('/');
      });
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

    return (
      <section className="form">
        <div className="errors">{ errors }</div>
        <form onSubmit={this.handleSubmit}>
          <img src={this.state.photoUrl} />
          <input type="text"
            value={this.state.name}
            onChange={this.updateProperty("name")}
            placeholder="Name" />

          <input type="date"
            value={this.state.release_date}
            onChange={this.updateProperty("release_date")} />

          <input type="text"
            value={this.state.genre}
            onChange={this.updateProperty("genre")}
            placeholder="Genre" />

          <input type="file"
            onChange={this.updatePhoto} />

          <input type="file"
            onChange={this.updateProperty("audioFile")} />

          <button onClick={this.handleSubmit} className="orange">Upload</button>
        </form>
      </section>
    )
  }
}

export default withRouter(TrackForm);
