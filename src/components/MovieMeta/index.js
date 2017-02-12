import React from 'react';
import Button from '../Button';
import './MovieMeta.css';

const MovieMeta = ({movieTitle, movieOverview, moviePosterPath, saveMovie}) => {

  const imgLink = 'https://image.tmdb.org/t/p/w500/' + moviePosterPath;

  function image() {
    if (moviePosterPath !== '') {
      return <img src={imgLink} alt={''} />;
    }

  }

  function callSaveMovie() {
    saveMovie(movieTitle, moviePosterPath);
  }


  return (
    <div>
      {image()}
      <div id="text">
        <div id="title">
          {movieTitle}
        </div>
        <div id="overview">
          {movieOverview}
        </div>
      </div>
      <Button onClick={callSaveMovie} buttonText={'Add to Collection'} />
    </div>
  );
};

export default MovieMeta;
