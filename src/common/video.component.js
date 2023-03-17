import React from 'react'

function Video(props) {
    const { imgUrl, title, videoId, description, channelTitle, handleSelect } = props
    return ( <>
         <div className={`list-group-item d-flex`} onClick={() => handleSelect(videoId)}>
            {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls height={60} width={160} /> */}
            <div className='row'>
                <div className='col-lg-6 mr-auto'>
                    <img src={imgUrl} className='list-image' />
                </div>
                <div className='col-lg-6 ps-0'>
                    <div>
                        <span className='heading-wrap'>
                            <p className='list-heading'>{title}</p>
                        </span>
                            <p className='list-description'>{channelTitle}</p>
                            <p className='list-description'>{description}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </> );
}

export default Video;