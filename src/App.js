import React, {useState} from 'react';
import './App.css';
import API from './youtube';
import VideoList from './videoList';
import VideoPlay from './VideoPlay';

function App() {
  const [search, setSearch] = useState('');
  const [videos, setVideos] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.get('/search',{
      params: {
        q: search
      }
    }).then((response)=>
    setVideos(response.data.items));
  }

  const handleSelectVideo = (video)=>{
    setSelectedVideo(video);
  }
  
  return (
          <div className="home">
            <form onSubmit={ handleSubmit }>
              <input type="text" value={search} placeholder="Search..." 
                onChange={e=>setSearch(e.target.value)} name="search" 
              />
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
            <div className="item">
              <div>
                <VideoPlay video={selectedVideo}/>
              </div>
              <div>
                <VideoList handleSelectVideo={handleSelectVideo} videos={videos}/>
              </div>
            </div>
          </div>
          );
}

export default App;
