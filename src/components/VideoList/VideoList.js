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
            <Link to={`/videos/${video.id}`} key={video.id} className="video-list__title">
              <div className="video-list__container">
                <div className="video-list__image-wrapper">
                  {/* image */}
                    <img 
                      className="video-list__image" 
                      src={video.image} 
                      alt={video.channel}            
                      />
                 
                </div>

                <div className="video-list__title-channel-wrapper">
                  {/* title */}
                    <p className="video-list__title">{video.title}</p>
                  
                  {/* channel */}
                    <p className="video-list__channel">{video.channel}</p>
                </div>
              </div>     
            </Link>
          )
      })}    
    </div>
  );
}

export default VideoList;