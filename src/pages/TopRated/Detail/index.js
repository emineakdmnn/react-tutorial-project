import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router-dom';
import { Loading } from '../../../Components/Loading';
import Error from '../../../Components/Error';
import MovieService from "../../../services/MovieService";
import styles from "../../styles/styles.module.scss"
import MovieDetailsCard from "../../../Components/Cards/MovieDetailsCard";

const TopRatedDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [movieDetails, setMovieDetails] = useState({});
    const movieService = new MovieService();

    const contentLoad = () => {
        setLoading(true);
        movieService.fetchMovieDetails(id).then(
            (response) => {
                setMovieDetails(response);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setMovieDetails({});
                setErrorResponse(error);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        contentLoad();
    }, [id]);

    return (
        <div className={styles["movie-details-card"]}>
            {loading && <Loading />}
            {errorResponse && <Error mainTitle={errorResponse.status} />}
            {!loading && (
                <MovieDetailsCard
                    id={movieDetails.id}
                    posterUrl={movieDetails.backdrop_path}
                    title={movieDetails.title}
                    overView={movieDetails.overview}
                />
            )}
        </div>
    );
};


export default TopRatedDetails;
