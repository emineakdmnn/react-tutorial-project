import React, {useEffect, useState} from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";
import {Link} from "react-router-dom";

const PopularSeries= () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [popularSeries, setPopularSeries] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const popularSeriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        popularSeriesService.fetchPopularSeries().then(
            (response) => {
                setPopularSeries(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setPopularSeries([]);
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
            <h2 className={styles['trend-header']}>Popular Series</h2>
            <div className={styles['trend-container']}>
                {popularSeries.map((series, index) => (
                    <Link key={'series-detail' + index} to={`/series-details-id/${series.id}`}>
                        <div
                            key={series.id}
                            className={`${styles['trend-card']} ${hoveredCard === series.id ? styles['hovered-card'] : ''}`}
                            onMouseEnter={() => handleMouseEnter(series.id)}
                            onMouseLeave={handleMouseLeave}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${hoveredCard === series.id ? series.backdrop_path : series.poster_path}`}
                                alt={series.name}
                            />
                            <div className={styles['movie-info']}>
                                <h3>{series.name}</h3>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

}
export default PopularSeries;