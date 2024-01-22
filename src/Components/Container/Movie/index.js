import React from "react";
import styles from './style.module.scss'
import Header from "../../NavBar/Movie/Header";
import cn from "classnames";
import Footer from "../../Footer/Footer";
import ErrorBoundary from "../../Error/ErrorBoundary";

function Movie(props) {
    return (
        <ErrorBoundary>
            <div className={cn(styles['fixed-header'])}>
                <Header headerTitle={'MOVİES'}></Header>
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

export default Movie;
