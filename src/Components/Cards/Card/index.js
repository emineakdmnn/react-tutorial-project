import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Card = (props) => {
    const [id, setId] = useState(props?.id ?? null);
    const [posterPath, setPosterPath] = useState(props?.posterPath ?? null);
    const [backdropPath, setBackdropPath] = useState(props?.backdropPath ?? null);
    const [title, setTitle] = useState(props?.title ?? null);
    const [hoveredCard, setHoveredCard] = useState(false);

    const handleMouseEnter = () => {
        setHoveredCard(true);
    };

    const handleMouseLeave = () => {
        setHoveredCard(false);
    };

    return (
        <div
            className={`${styles['trend-card']} ${hoveredCard ? styles['hovered-card'] : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img
                src={`https://image.tmdb.org/t/p/w200${hoveredCard && backdropPath ? backdropPath : posterPath}`}
                alt={title}
            />
            <div className={styles['movie-info']}>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    backdropPath: PropTypes.string,
};

export default Card;
