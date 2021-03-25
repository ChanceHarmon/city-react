import React from 'react';

class Movie extends React.Component {

  render() {
    return (
      <>
        <h2>Movie Results</h2>
        {this.props.movieList.map((movie, index) => (
          <div key={index}>
            <img src={movie.image_url} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <h4>Release Date: {movie.released_on}</h4>
            <h4>Popularity Score: {movie.popularity}</h4>
            <h4>Total Votes: {movie.total_votes}</h4>
            <h4>Avg Score per Vote: {movie.average_votes}</h4>
          </div>
        ))}
      </>
    )
  }
}

export default Movie;