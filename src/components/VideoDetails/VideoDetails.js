import React from 'react';
import './VideoDetails.scss';


function VideoDetails(props) {
  const {video, name, image} = props.selectedVideo
  console.log(video)
  return (
    <div className="video">
    <video controls poster={image} height="200px">
      <source src={video}></source>
    </video>
      
    </div>
  );
}

export default VideoDetails;