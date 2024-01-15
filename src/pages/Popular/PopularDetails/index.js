import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../Components/Loading';
import Error from '../../../Components/Error';
import MovieService from "../../../services/MovieService";

const PopularMovieDetail = () => {
    const { id } = useParams();
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
        <div>
            {loading && <Loading />}
            {errorResponse && <Error mainTitle={errorResponse.message} />}
            {!loading && (
                <>
                    <h1>{movieDetails.title}</h1>

                </>
            )}
        </div>
    );
};

export default PopularMovieDetail;
