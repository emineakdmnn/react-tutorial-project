import React, { useEffect, useState } from "react";
import styles from './style.module.scss'
import Header from "../NavBar/Header";
import cn from "classnames";
import Footer from "../Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieService from "../../services/MovieService";
import {Popular} from "../../pages/Popular";
import {TopRated} from "../../pages/TopRated";
import {UpComing} from "../../pages/UpComing";

function Container(props) {
    const [popularMovies, setPopularMovies] = useState([]);
    const movieService = new MovieService();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await movieService.fetchPopularMovies();
                setPopularMovies(movies);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies().then(() => {});
    }, [movieService]);

    const router = createBrowserRouter([
        {
            title: 'HomePage',
            path: '',
            element: <Popular />,
        },
        {
            title: 'Popular',
            path: '/popular',
            element: <Popular />,
        },
        {
            title: 'Top Rated',
            path: '/top-rated',
            element: <TopRated />,
        },
        {
            title: 'Up Coming',
            path: '/up_coming',
            element: <UpComing />,
        }
    ]);

    return (
        <>
            <div className={cn(styles['header-area'])}>
                <Header headerTitle={'MOVİES'}></Header>
            </div>
            <div className={cn(styles['content-area'])}>
                <ul className={styles['movie-list']}>
                    {popularMovies.map(movie => (
                        <li key={movie.id} className={styles['movie-item']}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                                className={styles['movie-poster']}
                            />
                            <div className={styles['movie-details']}>
                                <div className={styles['movie-detail-label']}>Title:</div>
                                <div className={styles['movie-detail-value']}>{movie.title}</div>
                            </div>
                        </li>
                    ))}
                </ul>
                <RouterProvider router={router} />
            </div>
            <div className={cn(styles['footer-area'])}>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Container;
