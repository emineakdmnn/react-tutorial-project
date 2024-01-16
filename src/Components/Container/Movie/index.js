import React from "react";
import styles from './style.module.scss'
import Header from "../../NavBar/Movie/Header";
import cn from "classnames";
import Footer from "../../Footer/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Popular from "../../../pages/Popular";
import PopularDetail from "../../../pages/Popular/Detail";
import TopRatedDetail from "../../../pages/TopRated/Detail";
import TopRated from "../../../pages/TopRated";
import UpComing from "../../../pages/UpComing";
import ErrorBoundary from "../../Error/ErrorBoundary";
import Error from "../../Error";
import UpComingDetail from "../../../pages/UpComing/Detail";

function Container(props) {
    const router = createBrowserRouter([
        {
            title: 'Popular',
            path: '/popular-movies',
            element: <Popular/>,
        },
        {
            title: 'Popular Detail',
            path: '/popular-movie-id/:id',
            element: <PopularDetail/>
        },
        {
            title: 'Top Rated',
            path: '/top-rated-movies',
            element: <TopRated/>,
        },
        {
            title: 'Top Rated Detail',
            path: '/top-rated-movie-id',
            element: <TopRatedDetail/>,
        },
        {
            title: 'Up Coming',
            path: '/up-coming-movies',
            element: <UpComing/>,
        },
        {
            title: 'Up Coming Detail',
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
            <div className={cn(styles['fixed-header'])}>
                <Header headerTitle={'MOVİES'}></Header>
            </div>
            <div className={cn(styles['container'])}>
                <RouterProvider router={router}/>
            </div>
            <div className={cn(styles['fixed-footer'])}>
                <Footer></Footer>
            </div>
        </ErrorBoundary>
);
}

export default Container;
