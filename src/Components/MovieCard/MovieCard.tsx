import React from 'react';
import { Movie } from '../../types';
import { MovieCardContainer, MovieDetails, MovieInfo, MoviePoster, MovieRating } from './MovieCardStyle';

export const MovieCard = (props: { movie: Movie }) => {

    const { movie } = props;

    return (
        <MovieCardContainer className="mr3 mb3">
            <MoviePoster src={"https://image.tmdb.org/t/p/original" + movie.posterPath} />
            <MovieInfo className="col col-12">
                <MovieDetails className="col col-9 p1">
                    <span>{movie.title}</span>
                    <span>{movie.releaseDate}</span>
                </MovieDetails>
                <MovieRating className="col col-3"><span>{movie.voteAverage}</span></MovieRating>

            </MovieInfo>
        </MovieCardContainer>
    )
}