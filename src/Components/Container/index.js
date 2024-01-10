import React, { useEffect, useState } from "react";
import styles from './style.module.scss'
import Header from "../NavBar/Header";
import cn from "classnames";
import Footer from "../Footer/Footer";
import { createBrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import { Popular } from "../../pages/Popular";
import { TopRated } from "../../pages/TopRated";
import UpComing from "../../pages/UpComing";

function Container(props) {


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
                <RouterProvider router={router} />
            </div>
            <div className={cn(styles['footer-area'])}>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Container;
