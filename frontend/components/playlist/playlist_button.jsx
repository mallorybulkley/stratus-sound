import React from 'react';
import Modal from 'react-modal';
import { modalStyle } from '../../util/modal_style.js';
import PlaylistFormContainer from './playlist_form_container';

class PlaylistButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = { modal: false, formType: "add" };

    Modal.setAppElement('#root');
  }

  openModal (type) {
    this.setState({ modal: true, formType: type });
  }

  closeModal(){
    this.setState({ modal: false, formType: "add" });
  }

  render () {
    return (
      <section>
        <a className="add-button" onClick={() => this.openModal(this.state.formType) }>
          <i className="fa fa-list" aria-hidden="true"/>
          Add to Playlist
        </a>

        <Modal isOpen={this.state.modal}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Modal"
          style={modalStyle}>

          <section className="playlist-form">
            <h1 className={ this.state.formType === "add" ? "active" : "" }
              onClick={ () => this.setState({ formType: "add" }) }>
              Add to Playlist
            </h1>
            <h1 className={ this.state.formType === "create" ? "active" : "" }
              onClick={ () => this.setState({ formType: "create" }) }>
              Create a Playlist
            </h1>
          </section>


          <PlaylistFormContainer
            closeModal={this.closeModal.bind(this)}
            trackId={this.props.trackId}
            formType={this.state.formType} />
        </Modal>
      </section>
    )
  }
}

export default PlaylistButton;
