import React from 'react';
import { MovieCards } from '../AppStyle';
import { Dropdown } from '../Components/Dropdown/Dropdown';
import { MovieCard } from '../Components/MovieCard/MovieCard';
import { Movie } from '../types';

export const MoviesPage = (props: { movieData: Movie[] | null; setSortQueryString: React.Dispatch<React.SetStateAction<string>> }) => {

    const filterList = ["Rating (Low to High)", "Rating (High to Low)", "Popularity (Low to High)", "Popularity (High to Low)"]

    const applySort = (sortSelection: string) => {
        switch (sortSelection) {
            case "Rating (Low to High)":
                props.setSortQueryString("&sort_by=vote_average.asc")
                break;
            case "Rating (High to Low)":
                props.setSortQueryString("&sort_by=vote_average.desc")
                break;
            case "Popularity (Low to High)":
                props.setSortQueryString("&sort_by=popularity.asc")
                break;
            case "Popularity (High to Low)":
                props.setSortQueryString("&sort_by=popularity.desc")
                break;
        }
    }

    return (

        <React.Fragment>
            <h2>Browse through our list of films showing at the cinema right now!</h2>
            <div className="self-start sm-col col-12 md-col-6 lg-col-2">
                <Dropdown list={filterList} title="Sort by..." callback={(item: string) => { applySort(item) }} />
            </div>
            <MovieCards className="mt3">
                {props.movieData && props.movieData.map((movie: Movie, i: number) => {
                    return (
                        <MovieCard key={"movieCard_" + i} movie={movie} />
                    )
                })}
            </MovieCards>
        </React.Fragment>
    )
}