import React, {useEffect, useState} from "react";
import styles from "../../Components/Container/style.module.scss";
import MovieService from "../../services/MovieService";
import {Loading} from "../../Components/Loading";
import MovieCard from "../../Components/Cards/MovieCard";

const Popular = ({}) => {
    const [loading, setLoading] = useState(true);
    const [popularMovies, setPopularMovies] = useState([]);
    const movieService = new MovieService();

    const contentLoad = async () => {
        setLoading(true)
        await movieService.fetchPopularMovies().then((response)=>{
            setPopularMovies(response)
            setLoading(false)
        }).catch((error) => {
            setPopularMovies([])
            setLoading(false)
        })
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
                <ul className={styles['movie-list']}>
                    {loading && <Loading />}
                    {!loading && popularMovies?.map((movie, index) => (
                        <MovieCard key={'popular-item'+index} id={movie.id} posterUrl={movie.poster_path} title={movie.title}/>))}
                </ul>
    );
};

export default Popular;
