import React, {useEffect, useState} from "react";
import styles from "../../../Components/Container/Movie/style.module.scss"
import Service from "../../../services/Service";
import MovieCard from "../../../Components/Cards/MovieCard";
import {Loading} from "../../../Components/Loading";
import {Link} from "react-router-dom";
import Index from "../../../Components/Error";
import Header from "../../../Components/NavBar/Movie/Header";

const TopRated = ({}) => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const movieService = new Service();
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

    return (
        <div>
            <Header headerTitle={'TOP RATED MOVİES'}/>
        <ul className={styles['movie-list']}>
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
        </div>
    );
}

export default TopRated;