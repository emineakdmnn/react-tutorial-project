// Container.js
import React from "react";
import styles from './style.module.scss'
import Header from "../NavBar/Header";
import cn from "classnames";
import Footer from "../Footer/Footer";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Popular from "../../pages/Popular";
import TopRated from "../../pages/TopRated";
import UpComing from "../../pages/UpComing";
import {Index} from "../Error";

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
            path: '/up-coming',
            element: <UpComing />,
        },
        {
            title: 'Not Found',
            path: '*',
            element: <Index />,
        },
    ]);

    return (
        <>
            <div className={cn(styles['header-area'])}>
                <Header headerTitle={'MOVİES'}></Header>
            </div>
            <div className={cn(styles['content-area'])}>
                <RouterProvider router={router}>
                    <Routes>
                        {router.routes?.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        {router.routes === undefined && <Route path="*" element={<Index />} />}
                    </Routes>
                </RouterProvider>
            </div>
            <div className={cn(styles['footer-area'])}>
                <Footer></Footer>
            </div>
        </>
    )
}
export default Container;
