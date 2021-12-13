import React from 'react';
import './VideoList.scss';
import { Link } from 'react-router-dom';

const  VideoList = (props) => {
  // props passed from Home page parent  Component
  // destructuring out the props
  const {videoList}  = props
  return (
    <div className="video-list">
      <h4 className="video-list__header">next video</h4>

      {/* iterate over video list to get individual list properties */}
      {videoList.map(video => {
        return ( 
              <div className="video-list__container" key={video.id}>
                <div className="video-list__image-wrapper">
                  {/* image */}
                  <Link to={`/videos/${video.id}`}>
                    <img 
                      className="video-list__image" 
                      src={video.image} 
                      alt={video.channel}            
                      />
                  </Link>
                </div>

                <div className="video-list__title-channel-wrapper">
                  {/* title */}
                  <Link to={`/videos/${video.id}`} className="video-list__title">
                    <p className="video-list__title">{video.title}</p>
                  </Link>
                  {/* channel */}
                  <Link to={`/videos/${video.id}`} className="video-list__channel">
                    <p className="video-list__channel">{video.channel}</p>
                  </Link>
                </div>
              </div>     
          )
      })}    
    </div>
  );
}

export default VideoList;