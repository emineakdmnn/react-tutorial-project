import React from "react";
import ErrorBoundary from "../../Error/ErrorBoundary";
import cn from "classnames";
import styles from "../Series/style.module.scss";
import Header from "../../NavBar/Series/Header";
import Footer from "../../Footer/Footer";


function Series(props) {
    return (
        <ErrorBoundary>
            <div className={cn(styles['fixed-header'])}>ß
                <Header headerTitle={'SERİES'}></Header>
            </div>
            <div className={cn(styles['container'])}>
                {props.children}
            </div>
            <div className={cn(styles['fixed-footer'])}>
                <Footer></Footer>
            </div>
        </ErrorBoundary>
    );
}

export default Series;