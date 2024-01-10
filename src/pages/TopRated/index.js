import React, {useEffect, useState} from "react";
import styles from "..//..//Components/Container/style.module.scss"
import MovieService from "../../services/MovieService";
export const TopRated = ({}) => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const movieService = new MovieService();

    const contentLoad = async () => {
        setTopRatedMovies(await movieService.fetchTopRatedMovies());
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
        <>
            <div>
                <ul className={styles['movie-list']}>
                    {topRatedMovies?.map(movie => (
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
}