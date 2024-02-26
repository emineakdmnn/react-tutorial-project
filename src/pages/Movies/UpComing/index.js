import React, {useEffect, useState} from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";
import {Link} from "react-router-dom";

const UpComingMovie= () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [upComingMovies, setUpComingMovies] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const upComingMovieService = new Service();

    const contentLoad = () => {
        setLoading(true);
        upComingMovieService.fetchUpcomingMovies().then(
            (response) => {
                setUpComingMovies(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setUpComingMovies([]);
                setErrorResponse(error);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        contentLoad();
    }, []);

    const handleMouseEnter = (movieId) => {
        setHoveredCard(movieId);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div>
            <h2 className={styles['trend-header']}>Up Coming Movies</h2>
            <div className={styles['trend-container']}>
                {upComingMovies.map((movie, index) => (
                    <Link key={'movies-details' + index} to={`/movie-details-id/${movie.id}`}>
                        <div
                            key={movie.id}
                            className={`${styles['trend-card']} ${hoveredCard === movie.id ? styles['hovered-card'] : ''}`}
                            onMouseEnter={() => handleMouseEnter(movie.id)}
                            onMouseLeave={handleMouseLeave}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${hoveredCard === movie.id ? movie.backdrop_path : movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className={styles['movie-info']}>
                                <h3>{movie.title}</h3>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

}
export default UpComingMovie;