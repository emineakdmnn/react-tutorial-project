import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../Components/VideoJs/player';

function VideoPlayerPage() {
    const { id } = useParams();

    const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

    return (
        <div>
            <VideoPlayer videoUrl={videoUrl} />
        </div>
    );
}

export default VideoPlayerPage;
