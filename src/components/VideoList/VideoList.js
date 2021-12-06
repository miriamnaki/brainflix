import React from 'react';
import './VideoList.scss';

const  VideoList = (props) => {


  return (
    <div className="video-list">
      <h4 className="video-list__header">next video</h4>

      {props.videoList.map(video => {
        return (
          <>
          <div key={video.id} className="video-list__container">
            <div className="video-list__image-wrapper">
              <img 
                className="video-list__image" 
                src={video.image} 
                alt="image" 
                onClick={() => props.onVideoSelect(video.id)}            
                />
            </div>

            <div className="video-list__title-channel-wrapper">
              <p className="video-list__title">{video.title}</p>
              <p className="video-list__channel">{video.channel}</p>
            </div>
          </div>
          </>    
          )
      })}    
    </div>
  );
}

export default VideoList;