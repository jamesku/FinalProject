import React from 'react';
import SearchBar from '../SearchBar';
import MovieMeta from '../MovieMeta';
import './Header.css';

const Header = ({movieTitle, movieOverview, moviePosterPath, searchValue, onChange, saveMovie}) => {
return(
  <div>

    <SearchBar onChange={onChange} searchValue={searchValue} />
    <MovieMeta
     movieTitle={movieTitle}
     movieOverview={movieOverview}
     moviePosterPath={moviePosterPath}
     saveMovie={saveMovie}
     />
  </div>
);
};

export default Header;
