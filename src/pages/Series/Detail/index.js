import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Service from "../../../services/Service";
import Header from "../../../Components/NavBar/Series/Header";
import {Loading} from "../../../Components/Loading";
import Error from "../../../Components/Error";
import MovieDetailsCard from "../../../Components/Cards/DetailsCard";

const SeriesDetail= () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [seriesDetail, setSeriesDetail] = useState({});
    const seriesService = new Service();

    const contentLoad = () => {
        setLoading(true);
        seriesService.fetchSeriesDetails(id).then(
            (response) => {
                setSeriesDetail(response);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setSeriesDetail({});
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
            {!loading && seriesDetail && seriesDetail.id && (
                <MovieDetailsCard
                    id={seriesDetail.id}
                    posterUrl={seriesDetail.poster_path}
                    title={seriesDetail.name}
                    overView={seriesDetail.overview}
                    tagLine={seriesDetail.tagline}
                    genres={seriesDetail.genres}
                    runtime={seriesDetail.runtime}
                    date={seriesDetail.release_date}
                    average={seriesDetail.vote_average}
                    videoUrl={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                />
            )}
        </div>
    );
}

export default SeriesDetail;