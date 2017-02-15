import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { logout } from '../../actions/session_actions';
import SessionFormContainer from '../session/session_form_container';
import LeftNav from './left_nav';
import Search from './search';
import RightNavLoggedIn from './right_nav_logged_in';
import RightNavLoggedOut from './right_nav_logged_out';
import { modalStyle } from '../../util/modal_style.js';

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.state = { modal: false, formType: "" };

    Modal.setAppElement('#root');
  }

  openModal (type) {
    this.setState({ modal: true, formType: type });
  }

  closeModal(){
    this.setState({ modal: false, formType: "" });
  }

  rightNav () {
    if (this.props.currentUser.username) {
      return (
        <RightNavLoggedIn
          currentUser={this.props.currentUser}
          logout={this.props.logout} />
      );
    } else {
      return (
        <RightNavLoggedOut openModal={this.openModal.bind(this)} />
      );
    }
  }

  render () {
    return (
      <section className="nav">
        <ul className="main-nav">
        <LeftNav />
        <Search />
        { this.rightNav() }
        </ul>

        <Modal isOpen={this.state.modal}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Modal"
          style={modalStyle}>

          <SessionFormContainer
            closeModal={this.closeModal.bind(this)}
            formType={this.state.formType} />
        </Modal>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
