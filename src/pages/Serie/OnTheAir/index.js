import React, { useEffect, useState } from 'react';
import Service from "../../../services/Service";
import Header from "../../../Components/NavBar/Series/Header";
import styles from "../../../Components/Container/Series/style.module.scss";
import {Loading} from "../../../Components/Loading";
import Index from "../../../Components/Error";
import {Link} from "react-router-dom";
import MovieCard from "../../../Components/Cards/Card";

const OnTheAir = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [onTheAirSeries, setOnTheAirSeries] = useState([]);
    const seriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        seriesService.fetchOnTheAirSeries().then(
            (response) => {
                setOnTheAirSeries(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setOnTheAirSeries([]);
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
            <Header headerTitle={'ON THE AIR SERIES'}/>
            <ul className={styles['movie-list']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading &&
                    onTheAirSeries?.map((series, index) => (
                        <Link key={'on-the-air-series' + index} to={`/on-the-air-series-id/${series.id}`}>
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

export default OnTheAir