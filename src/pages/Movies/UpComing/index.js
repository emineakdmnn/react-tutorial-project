import React, {useEffect, useState} from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";
import {Link} from "react-router-dom";
import Card from "../../../Components/Cards/Card";

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
export default UpComingMovie;