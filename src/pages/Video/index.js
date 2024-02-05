import React from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoJS from "../../Components/Container/VideoJS";

const VideoPlayer = (props) => {
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: props.videoUrl,
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    );
};

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
};

export default VideoPlayer;
