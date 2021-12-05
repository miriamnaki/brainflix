import React from 'react';
import './VideoSelected.scss';

function VideoSelected(props) {
  console.log('video detail props',props)
  const {video, title, image, channel, timestamp,views,likes,description,comments} = props.selectedVideo;
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