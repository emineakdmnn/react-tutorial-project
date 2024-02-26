import React, { useEffect, useState } from 'react';
import Service from "../../../services/Service";
import Header from "../../../Components/NavBar/Series/Header";
import styles from "../../../Components/Container/Series/style.module.scss";
import {Loading} from "../../../Components/Loading";
import Index from "../../../Components/Error";
import {Link} from "react-router-dom";
import MovieCard from "../../../Components/Cards/MovieCard";

const TopRated = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [topRatedSeries, setTopRatedSeries] = useState([]);
    const seriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        seriesService.fetchTopRatedSeries().then(
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

    return (
        <div>
            <Header headerTitle={'TOP RATED SERIES'}/>
            <ul className={styles['movie-list']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading &&
                    topRatedSeries?.map((series, index) => (
                        <Link key={'top-rated-series' + index} to={`/top-rated-series-id/${series.id}`}>
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

export default TopRated