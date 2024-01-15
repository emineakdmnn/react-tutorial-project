import React, { useEffect, useState } from "react";
import styles from "../../Components/Container/style.module.scss";
import MovieService from "../../services/MovieService";
import MovieCard from "../../Components/Cards/MovieCard";
import {Loading} from "../../Components/Loading";
import Index from "../../Components/Error";
import {Link} from "react-router-dom";

const UpComing = () => {
    const [loading, setLoading] = useState(true);
    const [upComingMovies, setUpComingMovies] = useState([]);
    const [errorResponse, setErrorResponse] = useState(null);
    const movieService = new MovieService();
    const contentLoad =  () => {
        setLoading(true)
         movieService.fetchUpComingMovies().then((response)=>{
            setUpComingMovies(response.results)
             setErrorResponse(null);
            setLoading(false)
        }).catch((error) => {
            setUpComingMovies([])
             setErrorResponse(error);
            setLoading(false)
        })
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
        <ul className={styles['movie-list']}>
            {loading && <Loading />}
            {errorResponse && <Index mainTitle={errorResponse.status} />}
            {!loading &&
                upComingMovies?.map((movie, index) => (
                    <Link key={'up-coming-movies' + index} to={`/up-coming-movie-id/${movie.id}`}>
                        <MovieCard
                            id={movie.id}
                            posterUrl={movie.poster_path}
                            title={movie.title}
                        />
                    </Link>
                ))}
        </ul>
    );
};

export default UpComing;
