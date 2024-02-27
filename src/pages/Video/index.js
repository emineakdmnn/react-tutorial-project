import React from 'react';
import PropTypes from 'prop-types';
import VideoJS from '../../Components/Container/VideoJS';
import styles from './style.module.scss';

function VideoPlayer({ videoUrl }) {
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: videoUrl,
                type: 'video/mp4',
            },
        ],
    };

    return (
        <div className={styles["videoContainer"]}>
            <VideoJS options={videoJsOptions} />
        </div>
    );
}

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
};

export default VideoPlayer;
