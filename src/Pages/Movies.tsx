import React from 'react';
import { MovieCards } from '../AppStyle';
import { Dropdown } from '../Components/Dropdown/Dropdown';
import { MovieCard } from '../Components/MovieCard/MovieCard';
import { Movie } from '../types';

export const MoviesPage = (props: { movieData: Movie[] | null }) => {

    const filterList = ["Rating (Asc)", "Rating (Desc)", "Title (A-Z)", "Title (Z-A)"]

    return (

        <React.Fragment>
            <h2>Browse through our list of films showing at the cinema right now!</h2>
            <div className="self-start col col-2">
                <Dropdown list={filterList} callback={(item: string) => { }} />
            </div>
            <MovieCards className="mt3">
                {props.movieData?.map((movie: Movie, i: number) => {
                    return (
                        <MovieCard key={"movieCard_" + i} movie={movie} />
                    )
                })}
            </MovieCards>
        </React.Fragment>
    )
}