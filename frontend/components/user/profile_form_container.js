import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userId, user) => dispatch(updateUser(userId, user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
