import React from 'react';
import './VideoSelected.scss';
import { API_KEY } from '../pages/HomePage/HomePage';


function VideoSelected(props) {
  if(!props.selectedVideo) {
    return <p>Loading video</p>
  }

  // props passed from home page
  // destructuring out video and image
  const {video, image} = props.selectedVideo;
  
  return (
    <div className="selected-video">
       <div className= "selected-video__container">
        <video className="selected-video__player" controls poster={image} alt="video selected">
          <source src={`${video}?api_key=${API_KEY}`}></source>
        </video>
      </div>     
    </div>
  );
}

export default VideoSelected;