import React from "react";
import {HeaderItem} from "./HeaderItem";
import PropTypes from "prop-types";

function Header(props) {
    const menuItems = [
        {
            title: 'Popular',
            path: '/popular',
        },
        {
            title: 'Top Rated',
            path: '/top-rated',
        },
        {
            title: 'Up Coming',
            path: '/up-coming'
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
