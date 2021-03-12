export const formatMovie = (movie: any) => {
  return {
    id: movie.id,
    title: movie.title,
    releaseDate: movie.release_date,
    voteAverage: movie.vote_average,
    backdropPath: movie.backdrop_path,
    posterPath: movie.poster_path,
    overview: movie.overview,
  };
};
