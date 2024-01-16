import React from "react";
import PropTypes from "prop-types";
import {HeaderItem} from "../HeaderItem";

function Header(props) {
    const menuItems = [
        {
            title: 'Popular',
            path: '/popular-movies',
        },
        {
            title: 'Top Rated',
            path: '/top-rated-movies',
        },
        {
            title: 'Up Coming',
            path: '/up-coming-movies'
        }
    ]

    return (
        <header>
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
