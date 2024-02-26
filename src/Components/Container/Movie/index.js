import React from "react";
import styles from '../Home/style.module.scss'
import Header from "../../NavBar/Header";
import cn from "classnames";
import Footer from "../../Footer/Footer";
import ErrorBoundary from "../../Error/ErrorBoundary";
import PopularMovie from "../../../pages/Movies/Popular";
import NowPlaying from "../../../pages/Movies/NowPlaying";
import TopRatedMovie from "../../../pages/Movies/TopRated";
import UpComingMovie from "../../../pages/Movies/UpComing";

function Movie(props) {
    return (
        <ErrorBoundary>
            <div className={cn(styles['fixed-header'])}>
                <Header headerTitle={'MOVİES'}></Header>
            </div>
            <div>
                <NowPlaying/>
            </div>
            <div>
                <PopularMovie/>
            </div>
            <div>
                <TopRatedMovie/>
            </div>
            <div>
                <UpComingMovie/>
            </div>
            <div className={cn(styles['fixed-footer'])}>
                <Footer></Footer>
            </div>
        </ErrorBoundary>
    );
}

export default Movie;
