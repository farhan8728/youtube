import React,{useState} from "react";

import axios from 'axios'
import Input from "./common/input.component";
import Button from "./common/button.component";
import Logo from "./images/youtube_favicon.jpg"
import VideoList from "./common/videolist.component";
import VideoPlayer from "./common/videoplayer.component";
import "./App.css"

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [videoId, setVideoId] = useState('');

  const video = videos.find(video => video.id.videoId === videoId);
  const handleSearch = async (e) => {
    
        e.preventDefault();

        const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
        const key = '';
        const type = 'video';
        const part = 'snippet';

        const { data } = await axios.get(`${baseUrl}?key=${key}&type=${type}&maxResults=20&part=${part}&q=${searchQuery}`)
        setVideos(data.items)
}
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12">
            <img src={Logo} className="logo" style={{width:"150px"}} alt="" />
            <Input 
            onChange = {e =>{setSearchQuery(e.target.value)}}
            className = "input"
            value = {searchQuery}
            />
            <Button
              className="btn btn-primary mx-3 searchbtn"
              text="Search"
              onClick = {handleSearch}
              style={{
                width: "100px",
                height: "50px",
                padding: "5px",
                fontSize: "20px",
                marginTop: "-10px",
              }}
            />
          </div>
        </div>
        
      </div>
      

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-7 col-lg-8">
            <VideoPlayer 
              videoId={ videoId }
              title={video?.snippet?.title || ''}
              description={video?.snippet?.description || ''}
              channelTitle={video?.snippet?.channelTitle || ''}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-4">
            <VideoList handleSelect={Id =>{setVideoId(Id)}}  videos={videos}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Youtube;
