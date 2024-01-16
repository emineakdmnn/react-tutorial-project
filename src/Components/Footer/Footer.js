import React from "react";
import {FooterItem} from "./FooterItem";
import styles from './style.module.scss'

function Footer() {
    const menuItems = [
        {
            title: 'Sıkça Sorulan Sorular',
            link: '/faq',
        },
    ];

    return (
        <div className={styles.footer}>
            {menuItems.map((menuItem) => (
                <FooterItem
                    key={menuItem.title}
                    title={menuItem.title}
                    link={menuItem.link}
                />
            ))}
        </div>
    );
}

export default Footer;
