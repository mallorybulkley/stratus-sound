import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = { query: "" };
  }

  updateQuery (e) {
    this.setState({ query: e.target.value }, () => {
      if (this.state.query.length > 2) {
        this.props.fetchSearchResults(this.state);
      }
    });
  }



  render () {
    const results = this.props.results.map((result, idx) => (
      <li key={idx}>{ result.content }</li>
    ));

    return (
      <li>
        <input
          id="search"
          type="text"
          placeholder="Search"
          value={ this.state.query }
          onChange={ this.updateQuery.bind(this) }/>
        <ul className="search-results">
          { results }
        </ul>
    </li>
    );
  }
}

export default Search;
