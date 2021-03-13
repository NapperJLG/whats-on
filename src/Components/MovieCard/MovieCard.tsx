import React from 'react';
import { Movie } from '../../types';
import { MovieCardContainer, MovieDetails, MovieDetailsOverlay, MovieInfo, MoviePoster, MovieRating } from './MovieCardStyle';
import { isMobile } from "react-device-detect";

export const MovieCard = (props: { movie: Movie }) => {

    const { movie } = props;

    return (
        <MovieCardContainer className={!isMobile ? "mr3 mb3" : "mb3"}>
            <MoviePoster src={"https://image.tmdb.org/t/p/original" + movie.posterPath} />
            <MovieDetailsOverlay>{movie.overview}</MovieDetailsOverlay>
            <MovieInfo className="col col-12">
                <MovieDetails className="col col-9 p1">
                    <span>{movie.title}</span>
                    <span>{movie.releaseDate}</span>
                </MovieDetails>
                <MovieRating rating={movie.voteAverage} className="col col-3"><span>{movie.voteAverage}</span></MovieRating>

            </MovieInfo>
        </MovieCardContainer>
    )
}