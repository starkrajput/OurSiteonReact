// src/components/VideoCarousel.tsx
import React from 'react';
import './VideoCarousel.css';

const VideoCarousel: React.FC = () => {
    return (
        <div className="video-carousel">
            <div className="carousel-item">
                <video src="/path/to/video1.mp4" autoPlay loop muted />
                <div className="carousel-caption">
                    <h2>Caption for Video 1</h2>
                </div>
            </div>
            <div className="carousel-item">
                <video src="/path/to/video2.mp4" autoPlay loop muted />
                <div className="carousel-caption">
                    <h2>Caption for Video 2</h2>
                </div>
            </div>
            <div className="carousel-item">
                <video src="/path/to/video3.mp4" autoPlay loop muted />
                <div className="carousel-caption">
                    <h2>Caption for Video 3</h2>
                </div>
            </div>
            <div className="carousel-item">
                <video src="/path/to/video4.mp4" autoPlay loop muted />
                <div className="carousel-caption">
                    <h2>Caption for Video 4</h2>
                </div>
            </div>
        </div>
    );
};

export default VideoCarousel;
