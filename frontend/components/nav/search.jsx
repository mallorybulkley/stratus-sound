import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = { query: "" };
    this.clearQuery = this.clearQuery.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery (e) {
    this.setState({ query: e.target.value }, () => {
      if (this.state.query.length > 2) {
        this.props.fetchSearchResults(this.state);
      }
      if (this.state.query.length < 2) {
        this.props.clearSearchResults();
      }
    });
  }

  clearQuery () {
    this.setState({ query: "" });
    this.props.clearSearchResults();
  }


  render () {
    const results = this.props.results.map((result, idx) => {
      const linkPrefix = result.searchable_type.toLowerCase() + "s";
      return (
      <Link to={`${linkPrefix}/${result.searchable_id}`} key={idx} onClick={ this.clearQuery }>
        <li>{ result.content }</li>
      </Link>
      );
    });

    return (
      <li>
        <input
          id="search"
          type="text"
          placeholder="Search"
          value={ this.state.query }
          onChange={ this.updateQuery }/>
        <ul className="search-results">
          { results }
        </ul>
    </li>
    );
  }
}

export default Search;
