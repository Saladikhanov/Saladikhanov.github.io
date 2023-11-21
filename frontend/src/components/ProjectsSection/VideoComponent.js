import React from 'react';
import LazyLoad from 'react-lazyload';

const VideoLazy = ({vid}) => {
    return (
        <LazyLoad height={200} offset={100}>
            <video width="100%" loop autoPlay={true} muted>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </LazyLoad>
    );
};

export default VideoLazy;