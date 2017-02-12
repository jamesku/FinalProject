import { connect } from 'react-redux';
import Header from '../components/Header';
import {searchForMovie, clearMovieSearch, saveMovie} from '../actions';

const mapStateToProps = (state) => {
  return {
    movieTitle: state.searchMovie.movieTitle,
    movieOverview: state.searchMovie.movieOverview,
    moviePosterPath: state.searchMovie.moviePosterPath,
    searchValue: state.searchMovie.searchValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      if (value) {
        dispatch(searchForMovie(value));
      } else {
        dispatch(clearMovieSearch());
      }
    },
    saveMovie: (movieTitle, moviePosterPath) => {
      dispatch(saveMovie(movieTitle, moviePosterPath));
    }
  };
};


const MovieSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default MovieSearch;
