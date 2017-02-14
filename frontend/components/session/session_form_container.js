import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SessionForm);
