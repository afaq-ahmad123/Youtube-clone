import React from 'react';
import './App.css';

export default function VideoItem(props) {
    // console.log(props.video);
    // href={`https://www.youtube.com/watch?v=${props.video['id']['videoId']}`}>
    return (<div className="item" onClick={()=>props.handleSelectVideo(props.video)}>
                <img src={props.video.snippet.thumbnails.default.url} alt="videoImage">
                </img>
                <div>{props.video.snippet.title}</div>
                <br />
            </div>);
}