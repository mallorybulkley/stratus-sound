import React from 'react';

class ProfileForm extends React.Component {
  constructor (props) {
    super(props);

    // const defaultState = { location: "", bio: "", photoFile: null, photoUrl: null };
    this.state = this.props.user

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
  }

  updateProperty (property) {
    return (e) => (
      this.setState({ [property]: e.target.value })
    );
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

  render () {
    const errors = this.props.errors.map((err, idx) => (
      <li key={idx}>{err}</li>
    ));

    return (
      <section className="profile form">
        <div className="errors">{ errors }</div>

        <section className="profile image">
          <img src={this.state.photo_url} />
          <input type="file"
          onChange={this.updatePhoto} />
        </section>

        <form onSubmit={this.handleSubmit}>
          <label>Location
            <input
              type="text"
              value={ this.state.location ? this.state.location : "" }
              onChange={this.updateProperty("location")} />
          </label>
          <label>Bio
            <textarea
              value={this.state.bio ? this.state.bio : "" }
              onChange={this.updateProperty("bio")} />
          </label>
          <button onClick={this.handleSubmit} className="orange">Save changes</button>
        </form>
      </section>
    )
  }
}

export default ProfileForm;
