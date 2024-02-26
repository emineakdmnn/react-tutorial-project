import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Service from "../../../services/Service";
import Header from "../../../Components/NavBar/Header";
import {Loading} from "../../../Components/Loading";
import Error from "../../../Components/Error";
import MovieDetailsCard from "../../../Components/Cards/MovieDetailsCard";


const MovieDetails= () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [movieDetail, setMovieDetail] = useState({});
    const movieService = new Service();

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
            {loading && <Loading/>}
            {errorResponse && <Error mainTitle={errorResponse.status}/>}
            {!loading && movieDetail && movieDetail.id && (
                <MovieDetailsCard
                    id={movieDetail.id}
                    posterUrl={movieDetail.poster_path}
                    title={movieDetail.title}
                    overView={movieDetail.overview}
                    videoUrl={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                />
            )}
        </div>
    );
}

export default MovieDetails;