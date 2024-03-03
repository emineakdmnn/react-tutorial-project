import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Global from '../../../helpers/Global';
import styles from './styles.module.scss';
import VideoPlayer from "../../VideoJs/player";

function MovieDetailsCard(props) {
    const {
        id,
        title,
        posterUrl,
        overView,
        videoUrl: defaultVideoUrl,
    } = props;

    const [showVideo, setShowVideo] = React.useState(false);
    const navigate = useNavigate();

    const handleToggleVideo = () => {
        setShowVideo(!showVideo);

        if (!showVideo) {
            navigate(`/video`);
        }
    };

    return (
        <div key={id} className={styles['movie-details-card']}>
            <img
                src={Global.tmdbImageBaseUrlw500 + posterUrl}
                alt={title}
                className={styles['image-container']}
            />
            <div className={styles['title-block']}>{title}</div>
            <div className={styles['title-label']}>{overView}</div>

            <button
                className={`${styles['play-button']} ${styles['custom-button']}`}
                onClick={handleToggleVideo}
            >
                <span>{showVideo ? 'Videoyu Kapat' : 'Videoyu Oynat'}</span>
            </button>

            {showVideo && (
                <div className={styles['video-overlay']}>
                    <VideoPlayer videoUrl={defaultVideoUrl} />
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
