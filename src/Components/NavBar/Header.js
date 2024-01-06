import React from "react";
import {HeaderItem} from "./HeaderItem";
import PropTypes from "prop-types";

function Header(props) {
    const menuItems = [
        {
            title: 'Cevaplanan',
            path: '/answered',
        },
        {
            title: 'Özel Mesaj',
            path: '/private-message',
        },
        {
            title: 'Favoriler',
            path: '/favorites'
        },
        {
            title: 'Geçmiş',
            path: '/history'
        },
        {
            title: 'Forumlarım',
            path: '/my-forums'
        } ,
        {
            title: 'Bana Özel',
            path: '/special-for-me'
        }
    ]


    return (
        <header>
            <h3>{props.headerTitle}</h3>
            <nav>
                {menuItems.map((menuItem) => {
                    return(
                        <HeaderItem title={menuItem.title} path={menuItem.path} style={{margin:'10px', color:'red'}} />
                    )
                })}
            </nav>
        </header>
    );
}

Header.propTypes={
    headerTitle: PropTypes.string.isRequired
}
export default Header;
