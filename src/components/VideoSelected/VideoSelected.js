import React from 'react';
import './VideoSelected.scss';


function VideoSelected(props) {
 
  const {video, image} = props.selectedVideo;

  
  if(!props.selectedVideo) {
    return <p>Loading video</p>
  }
  
  return (
    <div className="selected-video">
       <div className= "selected-video__container">
        <video className="selected-video__player" controls poster={image}>
          <source src={video}></source>
        </video>
      </div>

      
    </div>
  );
}

export default VideoSelected;