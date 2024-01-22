import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../Components/Loading';
import Error from '../../../Components/Error';
import MovieService from "../../../services/MovieService";
import MovieDetailsCard from "../../../Components/Cards/MovieDetailsCard";
import Header from "../../../Components/NavBar/Movie/Header";

const UpComingDetail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [movieDetail, setMovieDetail] = useState({});
    const movieService = new MovieService();

    const contentLoad = () => {
        setLoading(true);
        movieService.fetchMovieDetails(id).then(
            (response) => {
                setMovieDetail(response);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setMovieDetail({});
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
            <Header headerTitle={movieDetail.title}/>
            {loading && <Loading />}
            {errorResponse && <Error mainTitle={errorResponse.status} />}
            {!loading && movieDetail && movieDetail.id && (
                <MovieDetailsCard
                    id={movieDetail.id}
                    posterUrl={movieDetail.backdrop_path}
                    title={movieDetail.title}
                    overView={movieDetail.overview}
                />
            )}
        </div>
    );
};

export default UpComingDetail;
