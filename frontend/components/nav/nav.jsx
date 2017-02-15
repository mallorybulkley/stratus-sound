import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
});

const style = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '33%',
    left                       : '33%',
    right                      : '',
    bottom                     : '',
    border                     : '1px solid #ccc',
    background                 : '#fffff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};

class Nav extends React.Component {
  constructor (props) {
    super(props);
    this.state = { modal: false, formType: "" };
  }

  openModal (type) {
    this.setState({ modal: true, formType: type });
  }

  closeModal(){
    this.setState({ modal: false, formType: "" });
  }
  // if (props.currentUser.username) {
  //   return (
  //     <div>
  //       Hello, {props.currentUser.username}!
  //       <button onClick={props.logout}>Log Out</button>
  //     </div>
  //   );
  // }

  // update Upload link later!
  render () {
    return (
      <section className="nav">
        <ul className="nav">
          <li className="left logo">
            <Link to="/">Stratus Sound</Link>
          </li>

          <li className="left">
            <Link to="/">Home</Link>
          </li>

          <li>
            <input id="search" type="text" placeholder="Search"/>
          </li>

          <li className="right">
            <Link onClick={this.openModal.bind(this, "login")}>Sign In</Link>
          </li>

          <li>
            or
          </li>

          <li className="right">
            <Link onClick={this.openModal.bind(this, "signup")}
              className="orange">Create Account</Link>
          </li>

          <li>
            <Link to="/">Upload</Link>
          </li>
        </ul>

        <Modal isOpen={this.state.modal}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel="Modal"
          style={style}>

          <SessionFormContainer
            closeModal={this.closeModal}
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
