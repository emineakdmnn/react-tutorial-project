import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = (props) => {
    const { videoUrl } = props;
    const videoRef = useRef(null);

    useEffect(() => {
        console.log('Video URL:', videoUrl);

        const options = {
            controls: true,
            fluid: true,
            responsive: true,
            sources: [{
                src: videoUrl,
                type: 'video/mp4',
            }],
        };

        const player = videojs(videoRef.current, options);

        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, [videoUrl]);

    return (
        <div>
            <video ref={videoRef} className="video-js vjs-default-skin" />
        </div>
    );
};

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
};

export default VideoPlayer;
