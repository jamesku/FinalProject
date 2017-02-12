import {combineReducers} from 'redux'
import {ADD_MOVIE, REQUEST_MOVIE_META, CLEAR_MOVIE_SEARCH, RECEIVE_MOVIE_META, REQUEST_USER_MOVIES, INVALIDATE_USER_MOVIES, RECEIVE_USER_MOVIES } from '../actions'

// Change the state tree (movieSearch) based on the value input searching for the movie
//
function searchMovie(state = {
  isFetching: false,
  movieTitle: '',
  movieOverview: '',
  moviePosterPath: '',
  searchValue: ''
}, action) {
  switch (action.type) {
    // If the reducer is passed that the request is made is notes it in the state object
    case REQUEST_MOVIE_META:
      return Object.assign({}, state, {
        isFetching: true,
        searchValue: action.movie
      });
    // If the reducer is passed that the response has been received, it updates the state
    case RECEIVE_MOVIE_META:
      return Object.assign({}, state, {
        isFetching: false,
        movieTitle: action.movieObject[0].original_title,
        movieOverview: action.movieObject[0].overview,
        moviePosterPath: action.movieObject[0].poster_path,
        lastUpdated: action.receivedAt
      });
    case CLEAR_MOVIE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        movieTitle: '',
        movieOverview: '',
        moviePosterPath: '',
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}


// This is the lead function for calling the db of user movies, it incorporates the function above
function getUserMovies(state = {}, action) {
  switch (action.type) {

    default:
      return state;
  }
}

//return ([...state, userMovie(undefined,obj)]);

const userMovie = (state = {}, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        movieTitle: action.movie.movieTitle,
        moviePosterPath: action.movie.moviePosterPath
      };
    default:
      return state;
}
}

function UserMovies(state = {
}, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, {movie: [userMovie(undefined,action)]}];
    case RECEIVE_USER_MOVIES:
      return (
         [...state, {movie: action.movieArray}]
      );
    default:
      return state;
  }
}

// Combine reducers
const rootReducer = combineReducers({
  searchMovie,
  UserMovies
});

export default rootReducer;
