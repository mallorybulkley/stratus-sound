import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';
import { receiveErrors, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.form
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)),
    formType,
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
