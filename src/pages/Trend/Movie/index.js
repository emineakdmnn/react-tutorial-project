import React, { useEffect, useState } from 'react';
import Service from '../../../services/Service';
import styles from '../styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectFade, Mousewheel, Navigation, Pagination } from 'swiper/modules';

const TrendMovie = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [trendMovies, setTrendMovies] = useState([]);
    const trendMovieService = new Service();

    const contentLoad = async () => {
        setLoading(true);
        try {
            const response = await trendMovieService.fetchTrendMovies();
            setTrendMovies(response.results);
            setErrorResponse(null);
        } catch (error) {
            setTrendMovies([]);
            setErrorResponse(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        contentLoad();
    }, []);

    const handleSlideChange = (slide) => {
        setActiveIndex(slide.realIndex >= 0 ? slide.realIndex : 0);
    };

    return (
        <div>
            <h2 className={styles['trend-movie-header']}>Trend Filmler</h2>
            <Swiper
                slidesPerView={'auto'}
                modules={[EffectFade, Navigation, Pagination, Autoplay, Mousewheel]}
                effect="cards"
                pagination={{
                    clickable: true,
                }}
                mousewheel={{ forceToAxis: true }}
                speed={1000}
                navigation
                onSlideChange={handleSlideChange}
            >
                {trendMovies.map((movie, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto', margin: '0px 10px' }}>
                        <div className={styles['trend-movie-card']}>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TrendMovie;
