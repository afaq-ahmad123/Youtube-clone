import React from 'react';
import VideoItem from './videoItem';
import './App.css';

export default function VideoList(props){
    let videos = props.videos;
    if (videos) {
        videos = videos.map((video)=>{
                return (<li><VideoItem video={video}/></li>);
            });
    }
    return (<ul className="list">{videos}</ul>);
}


// response = response.data.items.map((result)=>{
//   let link;
//   if(result['id']['videoId']){
//     link = `https://www.youtube.com/watch?v=${result['id']['videoId']}`;
//   }else{
//     link = `https://www.youtube.com/user/${result['id']['channelId']}`;
//   }
//   return (<li><a href={link}>
//   {result['snippet']['title']}</a></li>);
// }
// );