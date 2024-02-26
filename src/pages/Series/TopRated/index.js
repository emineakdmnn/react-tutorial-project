import React, {useEffect, useState} from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";

const TopRatedSeries= () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [topRatedSeries, setTopRatedSeries] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const topRatedSeriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        topRatedSeriesService.fetchAiringTodaySeries().then(
            (response) => {
                setTopRatedSeries(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setTopRatedSeries([]);
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
            <h2 className={styles['trend-header']}>Top Rated Series</h2>
            <div className={styles['trend-container']}>
                {topRatedSeries.map((movie) => (
                    <div
                        key={movie.id}
                        className={`${styles['trend-card']} ${hoveredCard === movie.id ? styles['hovered-card'] : ''}`}
                        onMouseEnter={() => handleMouseEnter(movie.id)}
                        onMouseLeave={handleMouseLeave}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${hoveredCard === movie.id ? movie.backdrop_path : movie.poster_path}`}
                            alt={movie.name}
                        />
                        <div className={styles['movie-info']}>
                            <h3>{movie.name}</h3>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default TopRatedSeries;