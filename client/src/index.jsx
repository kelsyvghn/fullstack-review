import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  updateRepos () {
    // ajax({
    //   type: 'post',
    //   url: `github.com/users/${this.search.term}`,
    //   data: 'json',
    //   success: repos () => {
    //     console.log(this.state.repos);
    //   },
    //   e: console.log(e),
    // })
  }

  search (term) {
    console.log(`${term} was searched`);

    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));