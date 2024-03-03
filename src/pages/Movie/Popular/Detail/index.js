import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Loading} from '../../../../Components/Loading';
import Error from '../../../../Components/Error';
import Service from "../../../../services/Service";
import MovieDetailsCard from "../../../../Components/Cards/DetailsCard";
import Header from "../../../../Components/NavBar/Movie/Header";

const PopularMovieDetail = () => {
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
            <Header headerTitle={movieDetail.title}/>
            {loading && <Loading/>}
            {errorResponse && <Error mainTitle={errorResponse.status}/>}
            {!loading && movieDetail && movieDetail.id && (
                <MovieDetailsCard
                    id={movieDetail.id}
                    posterUrl={movieDetail.backdrop_path}
                    title={movieDetail.title}
                    overView={movieDetail.overview}
                    tagLine={movieDetail.tagLine}
                    videoUrl={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                />
            )}
        </div>
    );
};

export default PopularMovieDetail;
