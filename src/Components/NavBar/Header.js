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
            path: '/favoriler'
        },
        {
            title: 'Geçmiş',
            path: '/gecmis'
        },
        {
            title: 'Forumlarım',
            path: '/forumlarım'
        } ,
        {
            title: 'Bana Özel',
            path: '/bana-ozel'
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
