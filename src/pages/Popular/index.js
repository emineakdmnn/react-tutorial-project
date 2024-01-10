import React, {useEffect, useState} from "react";
import styles from "..//..//Components/Container/style.module.scss";
import MovieService from "../../services/MovieService";
import {Loading} from "../../Components/Loading";

export const Popular = ({}) => {
    const [loading, setLoading] = useState(true);
    const [popularMovies, setPopularMovies] = useState([]);
    const movieService = new MovieService();

    const contentLoad = async () => {
        setLoading(true)
        await movieService.fetchPopularMovies().then((response)=>{
            setPopularMovies(response)
            setLoading(false)
        }).catch((error) => {
            setPopularMovies([])
            setLoading(false)
        })
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
        <>
            <div>
                <ul className={styles['movie-list']}>
                    {loading && <Loading />}
                    {!loading && popularMovies?.map(movie => (
                        <li key={movie.id} className={styles['movie-item']}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                                className={styles['movie-poster']}
                            />
                            <div className={styles['movie-details']}>
                                <div className={styles['movie-detail-label']}>Title:</div>
                                <div className={styles['movie-detail-value']}>{movie.title}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
