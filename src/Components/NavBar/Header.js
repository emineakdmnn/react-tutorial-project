import React from "react";
import {HeaderItem} from "./Movie/HeaderItem";
import PropTypes from "prop-types";
import styles from "../Container/Movie/style.module.scss";


function Header(props) {
    const menuItems = [
        {
            title: 'Movies',
            path: '/movies',
        },
        {
            title: 'Series',
            path: '/series',
        },
        {
            title: 'Popular People',
            path: '/popular-person'
        }
    ]

    return (
        <header className={styles['fixed-header']}>
            <h3>{props.headerTitle}</h3>
            <nav>
                {menuItems.map((menuItem, index) => (
                    <HeaderItem key={menuItem.title} title={menuItem.title} path={menuItem.path} style={{ margin: '10px', color: 'red' }} />
                ))}
            </nav>
        </header>
    );

}

Header.propTypes={
    headerTitle: PropTypes.string.isRequired
}

export default Header;