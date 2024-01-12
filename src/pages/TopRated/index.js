import React, {useEffect, useState} from "react";
import styles from "../../Components/Container/style.module.scss"
import MovieService from "../../services/MovieService";
import MovieCard from "../../Components/Cards/MovieCard";
import {Loading} from "../../Components/Loading";

const TopRated = ({}) => {
    const [loading, setLoading] = useState(true);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const movieService = new MovieService();
    const contentLoad = () => {
        setLoading(true)
        movieService.fetchTopRatedMovies().then((response) => {
            setTopRatedMovies(response.results)
            setLoading(false)
        }).catch((error) => {
            setTopRatedMovies([])
            setLoading(false)
        })
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (<ul className={styles['movie-list']}>
        {loading && <Loading/>}

        {topRatedMovies?.map((movie, index) => (
            <MovieCard key={'top-rated-item-' + index} id={movie.id} posterUrl={movie.poster_path}
                       title={movie.title}/>))}
    </ul>);
}

export default TopRated;