import React from 'react';
import { CustomPagination, MovieCards } from '../AppStyle';
import { Dropdown } from '../Components/Dropdown/Dropdown';
import { MovieCard } from '../Components/MovieCard/MovieCard';
import { Movie } from '../types';

export const MoviesPage = (props: { movieData: Movie[] | null; setSortQueryString: React.Dispatch<React.SetStateAction<string>>; pageTotal: number | undefined; setSelectedPage: React.Dispatch<React.SetStateAction<number>> }) => {

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

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        props.setSelectedPage(page)
    }

    return (

        <React.Fragment>
            <h2>Browse through our list of films showing at the cinema right now!</h2>
            <div className="self-start sm-col col-12 md-col-6 lg-col-2 mb1">
                <Dropdown list={filterList} title="Sort by..." callback={(item: string) => { applySort(item) }} />
            </div>
            <CustomPagination className="flex justify-center" color="primary" count={props.pageTotal} onChange={(event: React.ChangeEvent<unknown>, page: number) => handlePageChange(event, page)} />
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