import React from 'react';


const UserMovies = ({getUserMovies, allMovies}) => {

  function returnMovies() {
    console.log(allMovies.movie.movieTitle);
    if (allMovies.movie.movieTitle) {
      return allMovies.movie.movieTitle;
    }

  }

console.log(allMovies);
  return (
    <div>
      {returnMovies()}
    </div>
  );
};

export default UserMovies;
