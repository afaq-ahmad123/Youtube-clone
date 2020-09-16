import React from 'react';

export default function VideoPlay(props) {
    console.log(props.video);
    if(!props.video) {
        return (
            <div>
                <p>Search the videos and click any to Play</p>
            </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    console.log(typeof props.video);
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} allowFullScreen title="Video Player" />
            </div>
            <div className="ui segment">
                <h3 className="ui header">{props.video.snippet.title}</h3>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
}