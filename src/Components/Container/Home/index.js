import React from "react";
import ErrorBoundary from "../../Error/ErrorBoundary";
import cn from "classnames";
import styles from "./style.module.scss";
import Footer from "../../Footer/Footer";
import Header from "../../NavBar/Header";
import TrendMovie from "../../../pages/Trend/Movie";
import TrendSeries from "../../../pages/Trend/Series";

function Container(props) {
    return (
        <ErrorBoundary>
            <div className={cn(styles['fixed-header'])}>
                <Header headerTitle={'EMİNE'}></Header>
            </div>
            <div>
                <TrendMovie />
            </div>
            <div>
                <TrendSeries/>
            </div>
            <div className={cn(styles['fixed-footer'])}>
                <Footer></Footer>
            </div>
        </ErrorBoundary>
    );
}

export default Container;
