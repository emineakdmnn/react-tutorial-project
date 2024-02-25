import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {HeaderItem} from "../HeaderItem";
import styles from '../style.module.scss'
import logo from "../../../images/movie.png";
import search from "../../../images/search.png";

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

    const [isSearchVisible, setSearchVisible] = useState(false);
    const searchContainerRef = useRef(null);

    useEffect(() => {
        const handleGlobalClick = (event) => {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target) &&
                event.target.className !== styles.search
            ) {
                setSearchVisible(false);
            }
        };

        document.addEventListener("click", handleGlobalClick);

        return () => {
            document.removeEventListener("click", handleGlobalClick);
        };
    }, []);

    const handleSearchClick = () => {
        setSearchVisible(!isSearchVisible);
    };

    const handleCloseClick = () => {
        setSearchVisible(false);
    };

    return (
        <div className={styles["header"]}>
            <header className={styles["headerContent"]}>
                <img src={logo} alt="Logo" className={styles["logo"]}/>
                <nav className={styles["nav"]}>
                    {menuItems.map((menuItem, index) => (
                        <HeaderItem
                            key={menuItem.title}
                            title={menuItem.title}
                            path={menuItem.path}
                            className="header-item"
                        />
                    ))}
                </nav>
                <div className={styles["searchContainer"]} ref={searchContainerRef}>
                    {isSearchVisible && (
                        <>
                            <input
                                type="text"
                                placeholder="Search..."
                                className={styles["searchInput"]}
                            />
                        </>
                    )}
                    {!isSearchVisible && (
                        <img
                            src={search}
                            alt="Search"
                            className={styles["search"]}
                            onClick={handleSearchClick}
                        />
                    )}
                </div>
            </header>
        </div>
    );
}

Header.propTypes = {
    headerTitle: PropTypes.string
}
export default Header;
