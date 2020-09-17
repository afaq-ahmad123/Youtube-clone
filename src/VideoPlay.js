import React from 'react';


//This component is to show the selected played video on the main page
export default function VideoPlay(props) {
    if(!props.video) {
        return (
            <div>
                <p>Search the videos and click any to Play</p>
            </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
        <div>
            <div className="video">
                <iframe src={videoSrc} allowFullScreen title="Video Player" 
                width="470px" height="280px"/>
            </div>
            <div>
                <h3>{props.video.snippet.title}</h3>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
}