import React from 'react';
import './App.css';

//This component is to configure each item in the right side results list
export default function VideoItem(props) {
    return (<div className="item" onClick={()=>props.handleSelectVideo(props.video)}>
                <img src={props.video.snippet.thumbnails.high.url} 
                width="60%"
                alt="videoImage">
                </img>
                <div>{props.video.snippet.title}</div>
                <br /><br />
            </div>);
}