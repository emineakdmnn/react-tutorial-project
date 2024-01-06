import React from "react";
import styles from './style.module.scss'

export const FooterItem = ({ title, link, style, ...props }) => {
    return (
        <p className={styles["footer-item"]} style={style} {...props}>
            {title}
        </p>
    );
};


