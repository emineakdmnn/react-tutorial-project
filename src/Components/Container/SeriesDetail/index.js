import React from "react";
import styles from '../Home/style.module.scss'
import Header from "../../NavBar/Header";
import cn from "classnames";
import Footer from "../../Footer/Footer";
import ErrorBoundary from "../../Error/ErrorBoundary";
import SeriesDetail from "../../../pages/Series/Detail";

function DetailsSeries(props) {
    return (
        <ErrorBoundary>
            <div className={cn(styles['fixed-header'])}>
                <Header headerTitle={'SERİES'}></Header>
            </div>
            <div>
                <SeriesDetail/>
            </div>
            <div className={cn(styles['fixed-footer'])}>
                <Footer></Footer>
            </div>
        </ErrorBoundary>
    )
}

export default DetailsSeries;