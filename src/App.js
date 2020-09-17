import React, {useState} from 'react';
import './App.css';
import API from './youtube';
import VideoList from './videoList';
import VideoPlay from './VideoPlay';


// the main component to show all fields in header
function App() {
  const [search, setSearch] = useState('');
  const [videos, setVideos] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [nextPage, setNextPage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.get('/search',{
      params: {
        q: search
      }
    }).then((response)=>{
      setNextPage(response.data.nextPageToken);
      setVideos(response.data.items);
  });
  }

  const handleSelectVideo = (video)=>{
    setSelectedVideo(video);
  }

  const handleLoad = async ()=>{
    await API.get('/search',{
      params: {
        q: search,
        pageToken: nextPage,
      }
    }).then((response)=>{
      setNextPage(response.data.nextPageToken);
      setVideos(response.data.items);
    });
  }
  
  return (
          <div className="home">
            <div className="header">
              <div className="icon">
              <img className="img" src={require('./youtube.png')} alt="Youtube"/>
              <div className="text"> YouTube </div>
              </div>
              <form onSubmit={ handleSubmit }>
                <input type="text" value={search} placeholder="Search..." 
                  onChange={e=>setSearch(e.target.value)} name="search" 
                  className="search"/>
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div>
              <div className="play">
                <VideoPlay video={selectedVideo}/>
              </div>
              <div className="list">
                <VideoList handleLoad={handleLoad} handleSelectVideo={handleSelectVideo} videos={videos}/>
              </div>
            </div>
          </div>
          );
}

export default App;
