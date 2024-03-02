import React, {useEffect, useState} from 'react';
import Service from "../../services/Service";
import styles from "../Trend/styles.module.scss";
import {Loading} from "../../Components/Loading";
import Index from "../../Components/Error";
import {Link} from "react-router-dom";
import Card from "../../Components/Cards/Card";


const Discover = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [discover, setDiscover] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [type, setType] = useState('movie');
    const discoverService = new Service();

    const contentLoad = () => {
        setLoading(true)
        const fetchService = type === 'tv'
            ? discoverService.fetchDiscover('tv')
            : discoverService.fetchDiscover('movie')

        fetchService.then(
            (response) => {
                console.log('API Response:', response);
                setDiscover(response.results);
                setErrorResponse(null);
                setLoading(false);
            },
            (error) => {
                setDiscover([]);
                setErrorResponse(error);
                setLoading(false);
            }
        );
    }

    useEffect(() => {
        contentLoad();
    }, [type]);

    const handleMouseEnter = (movieId) => {
        setHoveredCard(movieId);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const handleButtonClick = (typePeriod) => {
        setType(typePeriod);
        console.log('timePeriod:', typePeriod);
    };

    return (
        <div>
            <h2 className={styles['trend-header']}>
                Discover
                <div className={styles['button-container']}>
                    <button
                        className={`${styles['trend-button']} ${type === 'movie' ? styles['selected-button'] : ''}`}
                        onClick={() => handleButtonClick('movie')}
                    >
                        Movies
                    </button>
                    <button
                        className={`${styles['trend-button']} ${type === 'tv' ? styles['selected-button'] : ''}`}
                        onClick={() => handleButtonClick('tv')}
                    >
                        Series
                    </button>

                </div>
            </h2>
            <div className={styles['trend-container']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading && discover.map((movie, index) => (
                    <Link key={'movie-detail' + index} to={`/movie-details-id/${movie.id}`}>
                        <Card
                            key={'movie-details' + index}
                            id={movie.id}
                            posterPath={hoveredCard === movie.id ? movie.backdrop_path : movie.poster_path}
                            title={movie.title}
                            backdropPath={hoveredCard === movie.id ? movie.poster_path : movie.backdrop_path}
                            onMouseEnter={() => handleMouseEnter(movie.id)}
                            onMouseLeave={handleMouseLeave}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )

}

export default Discover;