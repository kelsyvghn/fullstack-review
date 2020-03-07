import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  addRepos (term) {
    ajax({
      type: 'post',
      url: 'https://api.github.com',
      data: { term },
      success: console.log('well, it went through post!'),
      error: e => console.log(e),
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    this.addRepos( term );
    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search search={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));