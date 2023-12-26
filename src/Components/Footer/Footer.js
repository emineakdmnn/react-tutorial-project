import React from "react";
import {FooterItem} from "./FooterItem";

function Footer() {
    const menuItems = [
        {
            title: 'Sıkça Sorulan Sorular',
            link: '/faq'
        }
    ]

    return (
        <div>
            <nav>
                {menuItems.map((menuItem) => {
                    return(
                        <FooterItem title={menuItem.title} link={menuItem.link} style={{margin:'10px', color:'red'}} />
                    )
                })}
            </nav>
        </div>
    );

}

export default Footer;