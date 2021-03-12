import React from 'react';
import { MovieCards } from '../AppStyle';
import { MovieCard } from '../Components/MovieCard/MovieCard';
import { Movie } from '../types';

export const MoviesPage = (props: { movieData: Movie[] | null }) => {

    return (
        <React.Fragment>
            <h2>Browse through our list of films showing at the cinema right now!</h2>
            <MovieCards className="mt3">
                {props.movieData?.map((movie: Movie) => {
                    return (
                        <MovieCard movie={movie} />
                    )
                })}
            </MovieCards>
        </React.Fragment>
    )
}