import React, {useEffect, useState} from "react";
import styles from "..//..//Components/Container/style.module.scss"
import MovieService from "../../services/MovieService";
import MovieCard from "../../Components/Cards/MovieCard";
const TopRated = ({}) => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const movieService = new MovieService();
    const contentLoad = async () => {
        setTopRatedMovies(await movieService.fetchTopRatedMovies());
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
                <ul className={styles['movie-list']}>
                    {topRatedMovies?.map((movie, index)=> (
                        <MovieCard key={'top-rated-item-'+index} id={movie.id} posterUrl={movie.poster_path} title={movie.title}/>))}
                </ul>
    );
}

export default TopRated;