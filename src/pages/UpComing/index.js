import React, {useEffect, useState} from "react";
import styles from "..//..//Components/Container/style.module.scss"
import MovieService from "../../services/MovieService";
import MovieCard from "../../Components/Cards/MovieCard";

const UpComing = ({}) => {
    const [upComingMovies, setUpComingMovies] = useState([]);
    const movieService = new MovieService();

    const contentLoad = async () => {
        setUpComingMovies(await movieService.fetchUpComingMovies());
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (<>
            <ul className={styles['movie-list']}>
                {upComingMovies?.map((movie, index) => (
                    <MovieCard key={'up-coming-item-'+index} id={movie.id} posterUrl={movie.poster_path} title={movie.title}/>))}
            </ul>
        </>);
}

export default UpComing;