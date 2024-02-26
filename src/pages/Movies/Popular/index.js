import React, {useEffect, useState} from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";

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
                {popularMovies.map((movie) => (
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
))}
            </div>
        </div>
    );
}

export default PopularMovie;
