import React, { useEffect, useState } from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";
import {Link} from "react-router-dom";
import Card from "../../../Components/Cards/Card";


const TrendMovie= () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [trendMovies, setTrendMovies] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const trendMovieService = new Service();

    const contentLoad = () => {
        setLoading(true);
        trendMovieService.fetchTrendWeekMovies().then(
            (response) => {
                setTrendMovies(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setTrendMovies([]);
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
            <h2 className={styles['trend-header']}>
                Trend Movies

            <div className={styles['button-container']}>
                <button className={styles['trend-button']} onClick={() => console.log('Today')}>
                    Bugün
                </button>
                <button className={styles['trend-button']} onClick={() => console.log('Week')}>
                    Bu Hafta
                </button>
            </div>
            </h2>
            <div className={styles['trend-container']}>
                {trendMovies.map((movie, index) => (
                    <Link key={'movie-detail' + index} to={`/movie-details-id/${movie.id}`}>
                        <Card
                            key={'movie-details' + index}
                            id={movie.id}
                            posterPath={hoveredCard === movie.id ? movie.backdrop_path : movie.poster_path}
                            title={movie.title}
                            backdropPath={hoveredCard === movie.id ? movie.poster_path : movie.backdrop_path}
                            onMouseEnter={() => handleMouseEnter(movie.id)}
                            onMouseLeave={handleMouseLeave}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TrendMovie;