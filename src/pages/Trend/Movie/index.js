import React, { useEffect, useState } from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";


const TrendMovie= () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [trendMovies, setTrendMovies] = useState([]);
    const trendMovieService = new Service();

    const contentLoad = () => {
        setLoading(true);
        trendMovieService.fetchTrendMovies().then(
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

    return (
        <div>
            <h2 className={(styles['trend-movie-header'])}>Trend Filmler</h2>
            <div className={(styles['trend-movie-container'])}>
                {trendMovies.map((movie) => (
                    <div key={movie.id} className={(styles['trend-movie-card'])}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendMovie;