import React, { useEffect, useState } from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";
import {Link} from "react-router-dom";
import Card from "../../../Components/Cards/Card";
import {Loading} from "../../../Components/Loading";
import Index from "../../../Components/Error";


const TrendMovie = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [trendMovies, setTrendMovies] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedTimePeriod, setSelectedTimePeriod] = useState('day');
    const trendMovieService = new Service();

    const contentLoad = () => {
        setLoading(true);
        const fetchService = selectedTimePeriod === 'week'
            ? trendMovieService.fetchTrendWeekMovies()
            : trendMovieService.fetchTrendDayMovies();

        fetchService.then(
            (response) => {
                console.log('API Response:', response);
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
    }, [selectedTimePeriod]);

    const handleMouseEnter = (movieId) => {
        setHoveredCard(movieId);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const handleButtonClick = (timePeriod) => {
        setSelectedTimePeriod(timePeriod);
        console.log('timePeriod:', timePeriod);
    };

    return (
        <div>
            <h2 className={styles['trend-header']}>
                Trend Movies
                <div className={styles['button-container']}>
                    <button
                        className={styles['trend-button']}
                        onClick={() => handleButtonClick('day')}
                    >

                        Today
                    </button>
                    <button
                        className={styles['trend-button']}
                        onClick={() => handleButtonClick('week')}
                    >
                        This Week
                    </button>
                </div>
            </h2>
            <div className={styles['trend-container']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading && trendMovies.map((movie, index) => (
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