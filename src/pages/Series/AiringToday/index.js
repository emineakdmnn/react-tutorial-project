import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import styles from '../../../Components/Container/Series/style.module.scss';
import Service from '../../../services/Service';
import { Loading } from '../../../Components/Loading';
import MovieCard from '../../../Components/Cards/MovieCard';
import Index from '../../../Components/Error';
import Header from "../../../Components/NavBar/Series/Header";

const AiringToday = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [airingTodaySeries, setAiringTodaySeries] = useState([]);
    const seriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        seriesService.fetchAiringTodaySeries().then(
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

    return (
        <div>
            <Header headerTitle={'AIRING TODAY SERIES'}/>
            <ul className={styles['movie-list']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading &&
                    airingTodaySeries?.map((series, index) => (
                        <Link key={'airing_today-series' + index} to={`/airing_today-series-id/${series.id}`}>
                            <MovieCard
                                id={series.id}
                                posterUrl={series.poster_path}
                                title={series.name}
                            />
                        </Link>
                    ))}
            </ul>
        </div>
    );

}

export default AiringToday