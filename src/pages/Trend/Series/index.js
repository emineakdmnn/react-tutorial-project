import React, { useEffect, useState } from 'react';
import Service from '../../../services/Service';
import styles from '../styles.module.scss';
import 'swiper/swiper-bundle.css';
import {Link} from "react-router-dom";
import Card from "../../../Components/Cards/Card";
import {Loading} from "../../../Components/Loading";
import Index from "../../../Components/Error";

const TrendSeries = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [trendSeries, setTrendSeries] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedTimePeriod, setSelectedTimePeriod] = useState('day');
    const trendSeriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        const fetchService = selectedTimePeriod === 'week'
            ? trendSeriesService.fetchTrendWeekSeries()
            : trendSeriesService.fetchTrendDaySeries();

        fetchService.then(
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
                Trend Series
                <div className={styles['button-container']}>
                    <button
                        className={`${styles['trend-button']} ${selectedTimePeriod === 'day' ? styles['selected-button'] : ''}`}
                        onClick={() => handleButtonClick('day')}
                    >
                        Today
                    </button>
                    <button
                        className={`${styles['trend-button']} ${selectedTimePeriod === 'week' ? styles['selected-button'] : ''}`}
                        onClick={() => handleButtonClick('week')}
                    >
                        This Week
                    </button>

                </div>
            </h2>
            <div className={styles['trend-container']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading && trendSeries.map((series, index) => (
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
