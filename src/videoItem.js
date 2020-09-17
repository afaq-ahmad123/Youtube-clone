import React from 'react';
import './App.css';

export default function VideoItem(props) {
    return (<div className="item" onClick={()=>props.handleSelectVideo(props.video)}>
                <img src={props.video.snippet.thumbnails.high.url} 
                width="80%"
                alt="videoImage">
                </img>
                <div>{props.video.snippet.title}</div>
                <br /><br />
            </div>);
}