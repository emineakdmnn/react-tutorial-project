import React, {useEffect, useState} from "react";
import styles from "../../Components/Container/style.module.scss";
import MovieService from "../../services/MovieService";
import {Loading} from "../../Components/Loading";
import MovieCard from "../../Components/Cards/MovieCard";
import Index from "../../Components/Error";

const Popular = ({}) => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [popularMovies, setPopularMovies] = useState([]);
    const movieService = new MovieService();

    const contentLoad = () => {
        setLoading(true)
        movieService.fetchPopularMovies().then((response) => {
            setPopularMovies(response.results)
            setErrorResponse(null)
            setLoading(false)
        }).catch((error) => {
            setPopularMovies([])
            setErrorResponse(error)
            setLoading(false)
        })
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
        <ul className={styles['movie-list']}>
            {loading && <Loading/>}
            {errorResponse && <Index mainTitle={errorResponse.status}/>}
            {!loading && popularMovies?.map((movie, index) => (
                <MovieCard key={'popular-item' + index} id={movie.id} posterUrl={movie.poster_path}
                           title={movie.title}/>))}
        </ul>
    );
};

export default Popular;
