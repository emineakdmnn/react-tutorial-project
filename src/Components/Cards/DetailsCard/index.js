import React from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import Global from '../../../helpers/Global';
import styles from './styles.module.scss';
import VideoPlayer from "../../VideoJs/player";
import {FaHeart, FaStar} from "react-icons/fa";
import {FaBookBookmark} from "react-icons/fa6";

function MovieDetailsCard(props) {
    const {
        id,
        title,
        posterUrl,
        overView,
        tagLine,
        genres,
        runtime,
        date,
        average,
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

    const formatRuntime = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        return `${hours}h ${minutes}m`;
    };

    const roundedAverage = Math.round(average * 10);
    const formattedAverage = `${roundedAverage}%`;

    const handleFavorite = () => {
        console.log('Favori butonuna tıklandı');
    };


    return (
        <div key={id} className={styles['movie-details-card']}>
            <img
                src={Global.tmdbImageBaseUrlw500 + posterUrl}
                alt={title}
                className={styles['image-container']}
            />
            <div className={`${styles['details-content']}`}>
                <div className={styles['title-block']}>{title}</div>
                <div className={styles['genres']}>
                    <li>   {date + ' - '}{genres.map(genre => genre.name).join(', ') + ' - '}
                        {formatRuntime(runtime)}
                    </li>
                </div>
                <div className={styles['side-by-side-container']}>
                    <div className={styles['outer_ring']}>{formattedAverage}</div>
                    <div className={styles['div-text']}> Member<br/>Point</div>
                    <div className={styles['button']} onClick={handleFavorite}>
                        <FaHeart/>
                    </div>
                    <div className={styles['button']} onClick={handleFavorite}>
                        <FaStar/>
                    </div>
                    <div className={styles['button']} onClick={handleFavorite}>
                        <FaBookBookmark/>
                    </div>

                </div>
                <div className={styles['tagline']}>{tagLine}</div>
                <div className={styles['title-summary']}>Summary</div>
                <div className={styles['title-label']}>{overView}</div>
            </div>

            <button
                className={`${styles['play-button']} ${styles['custom-button']}`}
                onClick={handleToggleVideo}
            >
                <span>{showVideo ? 'Videoyu Kapat' : 'Videoyu Oynat'}</span>
            </button>

            {showVideo && (
                <div className={styles['video-overlay']}>
                    <VideoPlayer videoUrl={defaultVideoUrl}/>
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
    tagLine: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
};

export default MovieDetailsCard;
