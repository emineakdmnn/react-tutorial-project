import React, {useEffect, useState} from 'react';
import Service from "../../../services/Service";
import styles from "../styles.module.scss";
import {Link} from "react-router-dom";
import Card from "../../../Components/Cards/Card";

const AiringTodaySeries= () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [airingTodaySeries, setAiringTodaySeries] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const airingTodaySeriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        airingTodaySeriesService.fetchAiringTodaySeries().then(
            (response) => {
                setAiringTodaySeries(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setAiringTodaySeries([]);
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
            <h2 className={styles['trend-header']}>Airing Today Series</h2>
            <div className={styles['trend-container']}>
                {airingTodaySeries.map((series, index) => (
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
export default AiringTodaySeries;