import React from 'react';
import './UserMovies.css';
import Button from '../Button';

const UserMovies = ({allMovies, deleteMovie}) => {

  const imgLink = 'https://image.tmdb.org/t/p/w500/';

  function image(link) {
    if (link !== '') {
      return <img src={imgLink + link} alt={''} />;
    }
  }

  function makeButton(movieId) {
    if (movieId) {
      return (
        <Button onClick={() => deleteMovie(movieId)} buttonText={'Delete'} />
      );
    }
  }


  function returnMovies() {
    const movieList =
    Array.from(allMovies).map((result, index) => (
      <div key={index}>
        <div className="item" id="smallPic">
          {image(result.moviePosterPath)}
        </div>
        {result.movieTitle}
        <div>
          {makeButton(result._id)}
        </div>

      </div>
    )

    );
    return movieList;
  }

  return (
    <div className="container">
      {returnMovies()}
    </div>
  );
};

export default UserMovies;



UserMovies.propTypes = {

  deleteMovie: React.PropTypes.func
};
