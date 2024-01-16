import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Global from "../../../helpers/Global";
import styles from '../../../pages/styles/styles.module.scss';

function MovieDetailsCard(props) {
    const [id, setId] = useState(props?.id ?? null);
    const [title, setTitle] = useState(props?.title ?? null);
    const [posterUrl, setPosterUrl] = useState(props?.posterUrl ?? null);
    const [overView, setOverView] = useState(props?.overView ?? null)

    useEffect(() => {
        setId(props?.id ?? null)
        setTitle(props?.title ?? null)
        setPosterUrl(props?.posterUrl ?? null)
        setOverView(props?.overView ?? null)
    }, [props])

    return (
        <div key={id} className={styles['movie-details-card']}>
            <img
                src={Global.tmdbImageBaseUrlw500+posterUrl}
                alt={title}
                className={styles['img']}
            />
            <div className={styles['title-label']}>{title}</div>
            <div className={styles['title-label']}>{overView}</div>
        </div>
    );
}

MovieDetailsCard.propTypes = {
    id: PropTypes.number,
    posterUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overView: PropTypes.string.isRequired
}

export default MovieDetailsCard;
