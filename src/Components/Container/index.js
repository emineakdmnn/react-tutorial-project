import React from "react";
import styles from './style.module.scss'
import Header from "../NavBar/Header";
import cn from "classnames";
import Footer from "../Footer/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PrivateMessage} from "../../pages/PrivateMessage";
import {Answered} from "../../pages/Answered";
import {Favorites} from "../../pages/Favorites";
import {History} from "../../pages/History";
import {MyForums} from "../../pages/MyForums";
import {SpecialForMe} from "../../pages/SpecialForMe";

function Container(props) {
    const router = createBrowserRouter([
        {
            title: 'Anasayfa',
            path: '',
            element: <Answered />,
        },
        {
            title: 'Cevaplanan',
            path: '/answered',
            element: <Answered />,
        },
        {
            title: 'Özel Mesaj',
            path: '/private-message',
            element: <PrivateMessage />,
        },
        {
            title: 'Favoriler',
            path: '/favorites',
            element: <Favorites />,
        },
        {
            title: 'Geçmiş',
            path: '/history',
            element: <History />,
        },
        {
            title: 'Forumlarım',
            path: '/my-forums',
            element: <MyForums />,
        } ,
        {
            title: 'Bana Özel',
            path: '/special-for-me',
            element: <SpecialForMe />,
        }
    ]);

    return (
        <>
            <div className={cn(styles['header-area'])}>
                <Header headerTitle={'X Haber'}></Header>
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
