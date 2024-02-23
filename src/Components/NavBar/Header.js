import React from "react";
import { HeaderItem } from "./Movie/HeaderItem";
import PropTypes from "prop-types";
import logo from "../../images/movie.png"; // Update if necessary
import styles from "./style.module.scss";

function Header(props) {
    const menuItems = [
        { title: "Movies", path: "/movies" },
        { title: "Series", path: "/series" },
        { title: "Popular People", path: "/popular-person" },
    ];

    return (
        <div className={styles.header}>
            <header className={styles.headerContent}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <nav className={styles.nav}>
                    {menuItems.map((menuItem, index) => (
                        <HeaderItem
                            key={menuItem.title}
                            title={menuItem.title}
                            path={menuItem.path}
                            className="header-item"
                        />
                    ))}
                </nav>
            </header>
        </div>
    );
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired,
};

export default Header;
