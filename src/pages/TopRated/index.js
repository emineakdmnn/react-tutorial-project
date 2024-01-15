import React, {useEffect, useState} from "react";
import styles from "../../Components/Container/style.module.scss"
import MovieService from "../../services/MovieService";
import MovieCard from "../../Components/Cards/MovieCard";
import {Loading} from "../../Components/Loading";
import {Link} from "react-router-dom";
import Index from "../../Components/Error";

const TopRated = ({}) => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const movieService = new MovieService();
    const contentLoad = () => {
        setLoading(true);
        movieService.fetchTopRatedMovies().then(
            (response) => {
                setTopRatedMovies(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setTopRatedMovies([]);
                setErrorResponse(error);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (<ul className={styles['movie-list']}>
            {loading && <Loading/>}
            {errorResponse && <Index mainTitle={errorResponse.status}/>}
            {!loading &&
                topRatedMovies?.map((movie, index) => (
                    <Link key={'top-rated-movies' + index} to={`/top-rated-movie-id?id=${movie.id}`}>
                        <MovieCard
                            id={movie.id}
                            posterUrl={movie.poster_path}
                            title={movie.title}
                        />
                    </Link>
                ))}
        </ul>
    );
}

export default TopRated;