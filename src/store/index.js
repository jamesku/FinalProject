import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {getUserMovies} from '../actions';

// Instantiate suggested logger
const loggerMiddleware = createLogger();


// Create Store applying reducers and middleware
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

export default store;

store.dispatch(getUserMovies());
// // Test:

// store.dispatch(fetchUserData('http://localhost:4000/movies')).then(() =>
// //   console.log(store.getState())
// );
