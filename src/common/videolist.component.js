import React from 'react';
import Video from './video.component';


const VideoList = ({ videos,handleSelect }) => {
 
    return (
        <div className='videophone col-lg-4 vid-measure '>
            <ul className="list-group">
                {
                   videos &&  videos.map((video, index) => (
                        <Video  
                            key={index} 
                            imgUrl={video.snippet.thumbnails.high.url} 
                            title={video.snippet.title}
                            description={video.snippet.description} 
                            videoId={video.id.videoId}
                            channelTitle={video.snippet.channelTitle}
                            handleSelect={handleSelect}
                       />
                   ))
                    
                }
               
            </ul>
        </div>
    )
}

export default VideoList