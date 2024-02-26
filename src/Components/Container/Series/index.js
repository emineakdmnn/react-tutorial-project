import React from "react";
import ErrorBoundary from "../../Error/ErrorBoundary";
import cn from "classnames";
import styles from "../Home/style.module.scss";
import Header from "../../NavBar/Header";
import Footer from "../../Footer/Footer";
import AiringTodaySeries from "../../../pages/Series/AiringToday";
import OnTheAirSeries from "../../../pages/Series/OnTheAir";
import PopularSeries from "../../../pages/Series/Popular";
import TopRatedSeries from "../../../pages/Series/TopRated";


function Series(props) {
    return (
        <ErrorBoundary>
            <div className={cn(styles['fixed-header'])}>
                <Header headerTitle={'SERİES'}></Header>
            </div>
            <div>
                <AiringTodaySeries/>
            </div>
            <div>
                <OnTheAirSeries/>
            </div>
            <div>
                <PopularSeries/>
            </div>
            <div>
                <TopRatedSeries/>
            </div>
            <div className={cn(styles['fixed-footer'])}>
                <Footer></Footer>
            </div>
        </ErrorBoundary>
    );
}

export default Series;