import React from "react";
import styles from '../Home/style.module.scss'
import Header from "../../NavBar/Header";
import cn from "classnames";
import Footer from "../../Footer/Footer";
import ErrorBoundary from "../../Error/ErrorBoundary";
import MovieDetails from "../../../pages/Movies/Detail";

function DetailsMovie(props) {
    return (
        <ErrorBoundary>
            <div className={cn(styles['fixed-header'])}>
                <Header headerTitle={'MOVİES'}></Header>
            </div>
            <div>
                <MovieDetails/>
            </div>
            <div className={cn(styles['fixed-footer'])}>
                <Footer></Footer>
            </div>
        </ErrorBoundary>
    )
}

export default DetailsMovie;