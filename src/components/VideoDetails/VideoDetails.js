import React from 'react';
import './VideoDetails.scss';
import Button from '../Button/Button';


const VideoDetails = (props) =>  {
  const {video, title, image, channel, timestamp,views,likes,description,comments} = props.selectedVideo
  console.log(comments)
  console.log(video)
  return (
    <div className="video">
      <video className="video__player" controls poster={image} height="200px">
        <source src={video}></source>
      </video>

      <h2 className="video__title">{title}</h2>

      <div className="video__info-wrapper">
        <div className="video__channel-time-wrapper">
          <p className="video__channel">{channel}</p>
          <p className="video__time">{timestamp}</p>
        </div>

        <div className="video__views-likes-wrapper">
         
          <button>views</button>
          <p className="video__views">{views}</p>
          <button>likes</button>
          <p className="video__likes">{likes}</p>
        </div>

      </div>
          <p>{description}</p>
      <div>

      </div>
      
        {console.log(comments)}
        {comments.map((comment) => {
          <p>{comments.length}</p>
          
           return (
             
             <div>

               <img src="" alt="avatar-image" />
               <p>{comment.name}</p>
               <p>{comment.timestamp}</p>
               <p>{comment.comment}</p>

             </div>
           )
           
        })}
     
      
    </div>
  );
}

export default VideoDetails;