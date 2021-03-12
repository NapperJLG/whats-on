import React from 'react';
import { MovieCards } from '../AppStyle';
import { MovieCard } from '../Components/MovieCard/MovieCard';

export const MoviesPage = () => {
    return (
        <React.Fragment>
            <h2>Browse through our list of films showing at the cinema right now!</h2>
            <MovieCards className="mt3">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </MovieCards>
        </React.Fragment>
    )
}