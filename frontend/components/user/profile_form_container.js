import { connect } from 'react-redux';
import ProfileForm from './profile_form';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  null
)(ProfileForm);
