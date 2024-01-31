import React, { useEffect, useState } from 'react';
import Service from '../../../services/Service';
import styles from '../styles.module.scss';
import 'swiper/swiper-bundle.css';

const TrendSeries = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [trendSeries, setTrendSeries] = useState([]);
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

    return (
        <div>
            <h2 className={(styles['trend-header'])}>Trend Diziler</h2>
            <div className={(styles['trend-container'])}>
                {trendSeries.map((movie) => (
                    <div key={movie.id} className={(styles['trend-card'])}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                        <h3>{movie.name}</h3>
                        <p>{movie.first_air_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendSeries;
