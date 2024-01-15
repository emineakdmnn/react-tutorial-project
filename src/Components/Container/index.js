import React from "react";
import styles from './style.module.scss'
import Header from "../NavBar/Header";
import cn from "classnames";
import Footer from "../Footer/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Popular from "../../pages/Popular";
import PopularDetail from "../../pages/MoviesDetail/PopularDetail";
import TopRatedDetail from "../../pages/MoviesDetail/TopRatedDetail";
import TopRated from "../../pages/TopRated";
import UpComing from "../../pages/UpComing";
import ErrorBoundary from "../Error/ErrorBoundary";
import Error from "../Error";
import UpComingDetail from "../../pages/MoviesDetail/UpComingDetail";

function Container(props) {
    const router = createBrowserRouter([
        {
            title: 'HomePage',
            path: '',
            element: <Popular/>,
        },
        {
            title: 'HomePage',
            path: '/home',
            element: <Popular/>,
        },
        {
            title: 'Popular',
            path: '/popular-movies',
            element: <Popular/>,
        },
        {
            title: 'Popular MoviesDetail',
            path: '/popular-movie-id/:id',
            element: <PopularDetail/>
        },
        {
            title: 'Top Rated',
            path: '/top-rated-movies',
            element: <TopRated/>,
        },
        {
            title: 'Top Rated MoviesDetail',
            path: '/top-rated-movie-id',
            element: <TopRatedDetail/>,
        },
        {
            title: 'Up Coming',
            path: '/up-coming-movies',
            element: <UpComing/>,
        },
        {
            title: 'Up Coming',
            path: '/up-coming-movie-id/:id',
            element: <UpComingDetail/>,
        },
        {
            title: 'Not Found',
            path: '*',
            element: <Error/>,
        },
    ]);

    return (
        <ErrorBoundary>
            <div className={cn(styles['header-area'])}>
                <Header headerTitle={'MOVİES'}></Header>
            </div>
            <RouterProvider router={router}/>
            <div className={cn(styles['footer-area'])}>
                <Footer></Footer>
            </div>
        </ErrorBoundary>
    );
}

export default Container;
