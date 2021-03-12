import axios from 'axios';
import React from 'react';
import { MoviesPage } from '../Pages/Movies';
import { Movie } from '../types';
import { formatMovie } from '../utils';


export const Movies = () => {

    const [movieData, setMovieData] = React.useState<Movie[] | null>(null)

    React.useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=bfc5fbd434c06c5ce7d01d69b041f090').then((response) => {
            setMovieData(response.data.results.map((movie: any) => formatMovie(movie)))
        })
    }, [])

    return (
        <MoviesPage movieData={movieData} />
    )
}