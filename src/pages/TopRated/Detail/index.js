import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import { Loading } from '../../../Components/Loading';
import Error from '../../../Components/Error';
import Service from "../../../services/Service";
import MovieDetailsCard from "../../../Components/Cards/MovieDetailsCard";
import Header from "../../../Components/NavBar/Movie/Header";

const TopRatedDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [movieDetails, setMovieDetails] = useState({});
    const movieService = new Service();

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
        <div>
            <Header headerTitle={movieDetails.title}/>
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
