import axios from 'axios';
import React from 'react';
import { MoviesPage } from '../Pages/Movies';
import { Movie } from '../types';
import { formatMovie } from '../utils';


export const Movies = () => {

    const [movieData, setMovieData] = React.useState<Movie[] | null>(null)
    const [sortQueryString, setSortQueryString] = React.useState<string>('')

    React.useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=bfc5fbd434c06c5ce7d01d69b041f090&language=en-US&primary_release_date.gte=2021-01-29&primary_release_date.lte=2021-03-18&with_release_type="2|3' + sortQueryString).then((response) => {
            setMovieData(response.data.results.map((movie: any) => formatMovie(movie)))
        })
    }, [sortQueryString])

    return (
        <MoviesPage movieData={movieData} setSortQueryString={setSortQueryString} />
    )
}