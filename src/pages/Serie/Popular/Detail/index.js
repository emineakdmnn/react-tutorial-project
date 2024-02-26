import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Loading} from '../../../../Components/Loading';
import Error from '../../../../Components/Error';
import Service from "../../../../services/Service";
import MovieDetailsCard from "../../../../Components/Cards/DetailsCard";
import Header from "../../../../Components/NavBar/Series/Header";

const PopularSeriesDetail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [seriesDetail, setSeriesDetail] = useState({});
    const movieService = new Service();

    const contentLoad = () => {
        setLoading(true);
        movieService.fetchSeriesDetails(id).then(
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
            <Header headerTitle={seriesDetail.name}/>
            {loading && <Loading/>}
            {errorResponse && <Error mainTitle={errorResponse.status}/>}
            {!loading && seriesDetail && seriesDetail.id && (
                <MovieDetailsCard
                    id={seriesDetail.id}
                    posterUrl={seriesDetail.backdrop_path}
                    title={seriesDetail.name}
                    overView={seriesDetail.overview}
                    videoUrl={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                />
            )}
        </div>
    );
};

export default PopularSeriesDetail;
