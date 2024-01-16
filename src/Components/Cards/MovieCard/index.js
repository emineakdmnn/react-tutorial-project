import React, {useEffect, useState} from "react";
import styles from "../../Container/Movie/style.module.scss";
import PropTypes from "prop-types";
import Global from "../../../helpers/Global";

function MovieCard(props) {
    const [id, setId] = useState(props?.id ?? null);
    const [posterUrl, setPosterUrl] = useState(props?.posterUrl ?? null);
    const [title, setTitle] = useState(props?.title ?? null);

    useEffect(()=>{
        setId(props?.id ?? null)
        setPosterUrl(props?.posterUrl ?? null)
        setTitle(props?.title ?? null)
    },[props])

    return (
        <li key={id} className={styles['movie-item']}>
            <img
                src={Global.tmdbImageBaseUrlw200+posterUrl}
                alt={title}
                className={styles['movie-poster']}
            />
            <div className={styles['movie-details']}>
                <div className={styles['movie-detail-label']}>Title:</div>
                <div className={styles['movie-detail-value']}>{title}</div>
            </div>
        </li>
    )

}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    posterUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default MovieCard;