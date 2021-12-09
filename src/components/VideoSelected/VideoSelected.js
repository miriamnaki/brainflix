import React from 'react';
import './VideoSelected.scss';


function VideoSelected(props) {
  console.log(props)

  if(!props.selectedVideo) {
    return <p>Loading video</p>
  }
  
  const {video, image} = props.selectedVideo;
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