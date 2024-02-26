import React, {useEffect, useState} from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";
import {Link} from "react-router-dom";
import Card from "../../../Components/Cards/Card";

const PopularMovie = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [popularMovies, setPopularMovies] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const popularMovieService = new Service();


    const contentLoad = () => {
        setLoading(true);
        popularMovieService.fetchPopularMovies().then(
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

    const handleMouseEnter = (movieId) => {
        setHoveredCard(movieId);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div>
            <h2 className={styles['trend-header']}>Popular Movies</h2>
            <div className={styles['trend-container']}>
                {popularMovies.map((movie, index) => (
                    <Link key={'movies-details' + index} to={`/movie-details-id/${movie.id}`}>
                        <Card
                            key={'movies-details' + index}
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

export default PopularMovie;
