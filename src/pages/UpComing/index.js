import React, { useEffect, useState } from "react";
import styles from "../../Components/Container/Movie/style.module.scss";
import Service from "../../services/Service";
import MovieCard from "../../Components/Cards/MovieCard";
import {Loading} from "../../Components/Loading";
import Index from "../../Components/Error";
import {Link} from "react-router-dom";
import Header from "../../Components/NavBar/Movie/Header";

const UpComing = () => {
    const [loading, setLoading] = useState(true);
    const [upComingMovies, setUpComingMovies] = useState([]);
    const [errorResponse, setErrorResponse] = useState(null);
    const movieService = new Service();
    const contentLoad =  () => {
        setLoading(true)
         movieService.fetchUpcomingMovies().then((response)=>{
            setUpComingMovies(response.results)
             setErrorResponse(null);
            setLoading(false)
        }).catch((error) => {
            setUpComingMovies([])
             setErrorResponse(error);
            setLoading(false)
        })
    };

    useEffect(() => {
        contentLoad();
    }, []);

    return (
        <div>
            <Header headerTitle={'UP COMİNG MOVİES'}/>
            <ul className={styles['movie-list']}>
                {loading && <Loading/>}
                {errorResponse && <Index mainTitle={errorResponse.status}/>}
                {!loading &&
                    upComingMovies?.map((movie, index) => (
                        <Link key={'up-coming-movies' + index} to={`/up-coming-movie-id/${movie.id}`}>
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

export default UpComing;
