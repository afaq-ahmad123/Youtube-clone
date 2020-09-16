import React from 'react';

export default function VideoItem(props) {
    // console.log(props.video);
    return (<a href={`https://www.youtube.com/watch?v=${props.video['id']['videoId']}`}>
                <img src={props.video['snippet']['thumbnails'].default.url} alt="videoImage">
                </img>
                <div>{props.video['snippet']['title']}</div>
                <br />
            </a>);
}