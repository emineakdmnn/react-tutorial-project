import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Global from "../../../helpers/Global";
import styles from '../../../pages/styles/styles.module.scss';
import VideoPlayer from '../../../pages/Video';

function MovieDetailsCard(props) {
    const [id, setId] = useState(props?.id ?? null);
    const [title, setTitle] = useState(props?.title ?? null);
    const [posterUrl, setPosterUrl] = useState(props?.posterUrl ?? null);
    const [overView, setOverView] = useState(props?.overView ?? null);
    const [videoUrl, setVideoUrl] = useState(props?.videoUrl ?? null);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        setId(props?.id ?? null);
        setTitle(props?.title ?? null);
        setPosterUrl(props?.posterUrl ?? null);
        setOverView(props?.overView ?? null);
        setVideoUrl(props?.videoUrl ?? null);
    }, [props]);

    const handlePlayVideo = () => {
        setShowVideo(true);
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
    };

    return (
        <div key={id} className={styles['movie-details-card']}>
            <img
                src={Global.tmdbImageBaseUrlw500 + posterUrl}
                alt={title}
                className={styles['img']}
            />
            <div className={styles['title-label']}>{title}</div>
            <div className={styles['title-label']}>{overView}</div>
            <button className={`${styles['play-button']} ${styles['custom-button']}`} onClick={handlePlayVideo}>
                <span> Play Video</span>
            </button>

            {showVideo && (
                <div className={styles['video-overlay']}>
                    <VideoPlayer videoUrl={videoUrl} onClose={handleCloseVideo} />
                </div>
            )}
        </div>
    );
}

MovieDetailsCard.propTypes = {
    id: PropTypes.number,
    posterUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overView: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
};

export default MovieDetailsCard;
