import * as SearchApiUtil from '../util/search_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
})

export const fetchSearchResults = (query) => (dispatch) => {
  return SearchApiUtil.fetchSearchResults(query)
    .then(data => dispatch(receiveSearchResults(data)),
      data => dispatch(receiveErrors(data.responseJSON.errors)));
};

export const clearSearchResults = () => ({
  type: RECEIVE_SEARCH_RESULTS,
  results: []
});
