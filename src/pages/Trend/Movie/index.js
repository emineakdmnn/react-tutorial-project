import React, { useEffect, useState } from 'react';
import Service from '../../../services/Service';
import styles from '../styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay, EffectFade, Mousewheel, Navigation, Pagination} from "swiper/modules";


const TrendMovie = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [trendMovies, setTrendMovies] = useState([]);
    const trendMovieService = new Service();

    const contentLoad = () => {
        setLoading(true);
        trendMovieService.fetchTrendMovies().then(
            (response) => {
                console.log(response.results)
                setTrendMovies(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setTrendMovies([]);
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
            <h2 className={(styles['trend-movie-header'])}>Trend Filmler</h2>
            <Swiper
                slidesPerView={'auto'}
                modules={[EffectFade, Navigation, Pagination, Autoplay, Mousewheel]}
                effect="cards"
                pagination={{
                    clickable: true,
                }}
                mousewheel={{forceToAxis: true}}
                speed={1000}
                navigation
                onSlideChange={(slide) => {
                    setActiveIndex(slide.realIndex >= 0 ? slide.realIndex : 0);
                }}
            >
                {trendMovies.map((movie, index) => {
                    return (
                        <SwiperSlide key={index} style={{width: 'auto', margin: '0px 10px'}}>
                            <div className={(styles['trend-movie-card'])}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <h3>{movie.title}</h3>
                                <p>{movie.release_date}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    );
};

export default TrendMovie;
