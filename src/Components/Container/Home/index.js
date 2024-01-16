import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Popular from "../../../pages/Popular";
import Error from "../../Error";
import ErrorBoundary from "../../Error/ErrorBoundary";
import cn from "classnames";
import styles from "./style.module.scss";
import Footer from "../../Footer/Footer";
import Header from "../../NavBar/Header";


function Container(props) {
    const router = createBrowserRouter( [
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
            title: 'Movies',
            path: '/movies',
            element: <Popular/>,
        },
        {
            title: 'Series',
            path: '/series',
            element: <Popular/>,
        },
        {
            title: 'Popular Person',
            path: '/popular-person',
            element: <Popular/>,
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
                <Header headerTitle={'EMİNE'}></Header>
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