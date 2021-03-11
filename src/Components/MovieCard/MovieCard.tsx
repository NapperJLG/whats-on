import React from 'react';
import { MovieCardContainer, MovieDetails, MovieInfo, MoviePoster, MovieRating } from './MovieCardStyle';

export const MovieCard = () => {
    return (
        <MovieCardContainer className="mr3 mb3">
            <MoviePoster src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" />
            <MovieInfo className="col col-12">
                <MovieDetails className="col col-9 p1">
                    <span>Joker</span>
                    <span>20th June 2019</span>
                </MovieDetails>
                <MovieRating className="col col-3"><span>8.4</span></MovieRating>

            </MovieInfo>
        </MovieCardContainer>
    )
}