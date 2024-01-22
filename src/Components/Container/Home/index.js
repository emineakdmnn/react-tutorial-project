import React from "react";
import ErrorBoundary from "../../Error/ErrorBoundary";
import cn from "classnames";
import styles from "./style.module.scss";
import Footer from "../../Footer/Footer";
import Header from "../../NavBar/Header";

function Container(props) {
    return (
        <ErrorBoundary>
            <div className={cn(styles['fixed-header'])}>
                <Header headerTitle={'EMİNE'}></Header>
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

export default Container;
