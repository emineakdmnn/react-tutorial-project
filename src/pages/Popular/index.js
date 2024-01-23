import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import styles from '../../Components/Container/Movie/style.module.scss';
import Service from '../../services/Service';
import { Loading } from '../../Components/Loading';
import MovieCard from '../../Components/Cards/MovieCard';
import Index from '../../Components/Error';
import Header from "../../Components/NavBar/Movie/Header";
import cn from "classnames";

const Popular = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [popularMovies, setPopularMovies] = useState([]);
    const movieService = new Service();

    const contentLoad = () => {
        setLoading(true);
        movieService.fetchPopularMovies().then(
            (response) => {
                setPopularMovies(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setPopularMovies([]);
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
            <Header headerTitle={'POPULAR MOVİES'}/>
            <ul className={styles['movie-list']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading &&
                    popularMovies?.map((movie, index) => (
                        <Link key={'popular-movies' + index} to={`/popular-movie-id/${movie.id}`}>
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
};

export default Popular;
