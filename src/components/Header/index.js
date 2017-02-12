import React from 'react';
import SearchBar from '../SearchBar';
import MovieMeta from '../MovieMeta';
import './Header.css';

const Header = ({movieTitle, movieOverview, moviePosterPath,
                _id, searchValue, onChange, saveMovie}) => {
  return (
    <div>
      <SearchBar onChange={onChange} searchValue={searchValue} />
      <div className="container">
        <MovieMeta
          movieTitle={movieTitle}
          movieOverview={movieOverview}
          moviePosterPath={moviePosterPath}
          _id={_id}
          saveMovie={saveMovie}
          />
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  movieTitle: React.PropTypes.string,
  movieOverview: React.PropTypes.string,
  moviePosterPath: React.PropTypes.string,
  _id: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  onChange: React.PropTypes.func,
  saveMovie: React.PropTypes.func
};
