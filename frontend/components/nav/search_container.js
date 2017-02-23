import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  results: state.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
