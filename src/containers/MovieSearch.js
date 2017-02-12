import { connect } from 'react-redux';
import Header from '../components/Header';
import {searchForMovie, clearMovieSearch, saveMovie} from '../actions';

const mapStateToProps = (state) => {
  return {
    movieTitle: state.searchMovie.movieTitle,
    movieOverview: state.searchMovie.movieOverview,
    moviePosterPath: state.searchMovie.moviePosterPath,
    _id: state.searchMovie._id,
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
    saveMovie: (movieTitle, moviePosterPath, _id) => {
      dispatch(saveMovie(movieTitle, moviePosterPath, _id));
    }
  };
};


const MovieSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default MovieSearch;
