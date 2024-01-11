import React, { useEffect, useState } from "react";
import styles from "../../Components/Container/style.module.scss";
import MovieService from "../../services/MovieService";
import MovieCard from "../../Components/Cards/MovieCard";
import {Loading} from "../../Components/Loading";

const UpComing = () => {
    const [loading, setLoading] = useState(true);
    const [upComingMovies, setUpComingMovies] = useState([]);
    const movieService = new MovieService();
    const contentLoad =  () => {
        setLoading(true)
         movieService.fetchUpComingMovies().then((response)=>{
            setUpComingMovies(response)
            setLoading(false)
        }).catch((error) => {
            setUpComingMovies([])
            setLoading(false)
        })
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
        <ul className={styles['movie-list']}>
            {loading && <Loading/>}
            {upComingMovies?.map((movie, index) => (
                <MovieCard key={'up-coming-item-' + index} id={movie.id} posterUrl={movie.poster_path} title={movie.title} />
            ))}
        </ul>
    );
};

export default UpComing;
