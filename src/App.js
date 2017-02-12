import React from 'react';
import './App.css';
import MovieSearch from './containers/MovieSearch.js';
import MovieLibrary from './containers/MovieLibrary.js';

const App = () => (
  <div>
    <MovieSearch />
    <MovieLibrary />
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
