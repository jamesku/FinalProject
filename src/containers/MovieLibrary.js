import { connect } from 'react-redux';
import UserMovies from '../components/UserMovies';
import {getUserMovies} from '../actions';

const mapStateToProps = (state) => {
  return {
    allMovies: state.UserMovies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserMovies: dispatch(getUserMovies())
  };
};


const MovieLibrary = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMovies);

export default MovieLibrary;
