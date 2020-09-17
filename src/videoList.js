import React from 'react';
import VideoItem from './videoItem';
import './App.css';

// This component basically list all the results from youtube search API
export default function VideoList(props){
    let videos = props.videos;
    if (videos) {
        videos = videos.map((video)=>{
                    return (<li><VideoItem video={video}
                    handleSelectVideo={props.handleSelectVideo} 
                    key={video.id.videoId} /></li>);
            });
        videos.unshift(<button onClick={props.handleLoad} 
                            className='load'>Load more...
                            </button>);
        return videos;
    }
    return (<ul className="list">
        {videos}</ul>);
}
