import React from 'react';
import './App.css';
import MovieSearch from './containers/MovieSearch.js';
import Wall from './containers/wall';
import Header from './containers/header';
import { Router, Route, Link, browserHistory } from 'react-router';


const App = () => (
<div>
  <Header />
  <Router history={browserHistory} >
      <Route path="/about" component={Wall} />
      <Route path="/users" component={MovieSearch}>
        <Route path="/user/:userId" component={Wall} />
      </Route>
      <Route path="*" component={Wall} />
  </Router>
  </div>
);

export default App;


/*
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
      </div>
    );
  }
}


import React from 'react';
*/
