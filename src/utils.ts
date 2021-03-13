import React from "react";

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

export const useOutsideAlerter = (
  ref: React.RefObject<HTMLElement>,
  callback: Function
) => {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};