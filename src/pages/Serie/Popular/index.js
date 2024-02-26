import React, { useEffect, useState } from 'react';
import Service from "../../../services/Service";
import Header from "../../../Components/NavBar/Series/Header";
import styles from "../../../Components/Container/Series/style.module.scss";
import {Loading} from "../../../Components/Loading";
import Index from "../../../Components/Error";
import {Link} from "react-router-dom";
import MovieCard from "../../../Components/Cards/MovieCard";

const Popular = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [popularSeries, setPopularSeries] = useState([]);
    const seriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        seriesService.fetchPopularSeries().then(
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

    return (
        <div>
            <Header headerTitle={'POPULAR SERIES'}/>
            <ul className={styles['movie-list']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading &&
                    popularSeries?.map((series, index) => (
                        <Link key={'popular-series' + index} to={`/popular-series-id/${series.id}`}>
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

export default Popular