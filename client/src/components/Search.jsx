import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange (e) {
    e.preventDefault(e);
    this.setState({
      term: e.target.value
    });
  }

  onSearch() {
    this.props.search(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.onSearch}> Add Repos </button>
    </div>)
  }
}

export default Search;