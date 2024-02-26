import React, { useEffect, useState } from 'react';
import Service from '../../../services/Service';
import styles from '../styles.module.scss';
import 'swiper/swiper-bundle.css';
import {Link} from "react-router-dom";
import Card from "../../../Components/Cards/Card";

const TrendSeries = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [trendSeries, setTrendSeries] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const trendSeriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        trendSeriesService.fetchTrendSeries().then(
            (response) => {
                setTrendSeries(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setTrendSeries([]);
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
            <h2 className={styles['trend-header']}>Trend Series</h2>
            <div className={styles['trend-container']}>
                {trendSeries.map((series, index) => (
                    <Link key={'series-detail' + index} to={`/series-details-id/${series.id}`}>
                        <Card
                            key={'series-details' + index}
                            id={series.id}
                            posterPath={hoveredCard === series.id ? series.backdrop_path : series.poster_path}
                            title={series.name}
                            backdropPath={hoveredCard === series.id ? series.poster_path : series.backdrop_path}
                            onMouseEnter={() => handleMouseEnter(series.id)}
                            onMouseLeave={handleMouseLeave}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TrendSeries;
