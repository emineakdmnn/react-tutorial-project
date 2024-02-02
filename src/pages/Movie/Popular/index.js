import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../Components/Container/Movie/style.module.scss';
import Service from '../../../services/Service';
import { Loading } from '../../../Components/Loading';
import MovieCard from '../../../Components/Cards/MovieCard';
import Index from '../../../Components/Error';
import Header from '../../../Components/NavBar/Movie/Header';

const Popular = () => {
    const [loading, setLoading] = useState(true);
    const [errorResponse, setErrorResponse] = useState(null);
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const movieService = new Service();

    const contentLoad = (searchTerm = '') => {
        setLoading(true);
        if (searchTerm) {
            movieService.fetchSearchMovie(searchTerm).then(
                (response) => {
                    setPopularMovies(response.results);
                    setErrorResponse(null);
                    setLoading(false);
                },
                (error) => {
                    setPopularMovies([]);
                    setErrorResponse(error);
                    setLoading(false);
                }
            );
        } else {
            movieService.fetchPopularMovies().then(
                (response) => {
                    setPopularMovies(response.results);
                    setErrorResponse(null);
                    setLoading(false);
                },
                (error) => {
                    setPopularMovies([]);
                    setErrorResponse(error);
                    setLoading(false);
                }
            );
        }
    };

    useEffect(() => {
        contentLoad();
    }, []);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchTerm(inputValue);

        if (inputValue.length >= 3) {
            contentLoad(inputValue);
        } else if (inputValue.length === 0) {
            contentLoad();
        }
    };

    return (
        <div>
            <Header headerTitle={'POPULAR MOVİES'}/>
            <div className={styles['search-container']}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
            <ul className={styles['movie-list']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading &&
                    popularMovies?.map((movie, index) => (
                        <Link key={'popular-movies' + index} to={`/popular-movie-id/${movie.id}`}>
                            <MovieCard
                                id={movie.id}
                                posterUrl={movie.poster_path}
                                title={movie.title}
                            />
                        </Link>
                    ))}
            </ul>
        </div>
    );
};

export default Popular;
