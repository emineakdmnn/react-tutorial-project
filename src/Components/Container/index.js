import React from "react";
import styles from './style.module.scss'
import Header from "../NavBar/Header";
import cn from "classnames";
import Footer from "../Footer/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PrivateMessage} from "../../pages/PrivateMessage";
import {Answered} from "../../pages/Answered";

function Container(props) {
    const router = createBrowserRouter([
        {
            title: 'Cevaplanan',
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
            element: <PrivateMessage />, //todo favorites page oluşturulacak
        },
        {
            title: 'Geçmiş',
            path: '/history',
            element: <PrivateMessage />, //todo history page oluşturulacak
        },
        {
            title: 'Forumlarım',
            path: '/my-forums',
            element: <PrivateMessage />, //todo forums page oluşturulacak
        } ,
        {
            title: 'Bana Özel',
            path: '/special-for-me',
            element: <PrivateMessage />, //todo specialForMe page oluşturulacak
        }
    ]);

    return (
        <>
            <div className={cn(styles['headerArea'])}>
                <Header headerTitle={'X Haber'}></Header>
            </div>
            <div className={styles['contentArea']}>
                <RouterProvider router={router} />
            </div>
            <div className={styles['footerArea']}>
                <Footer></Footer>
            </div>
        </>
    )

}

export default Container