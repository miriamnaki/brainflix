import React from 'react';
import './VideoDetails.scss';
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'

const VideoDetails = (props) =>  {
  const {video, title, image, channel, timestamp,views,likes,description,comments} = props.selectedVideo
  let arr = comments.length
  let postedTimestamp  = new Date(timestamp);
  let currentDate = postedTimestamp.toLocaleDateString();

   
  console.log(arr)
  console.log(comments)
  console.log(video)
  return (
    <div className="video">
      <div className= "video__container">
        <video className="video__player" controls poster={image}>
          <source src={video}></source>
        </video>
      </div>

        <div className="video__details-container">
          <h2 className="video__title">{title}</h2>

          <hr className="video__divider"></hr>

        <div className="video__info-wrapper">
          <div className="video__channel-time-wrapper">
            <p className="video__channel">By {channel}</p>
            
            
            <p className="video__time video__tags">{currentDate}</p>
          </div>

          <div className="video__views-likes-wrapper">
            <div className="video__test">
              <button className="video__views-button video__icon"><img src={viewsIcon} alt="viewsIcon" /></button>

              <p className="video__views-count video__tags">{views}</p>
            </div>

            <div className="video__test">
              <button className="video__likes-button video__icon"><img src={likesIcon} alt="viewsIcon" /></button>
              <p className="video__likes-count video__tags">{likes}</p>

            </div>

          </div>

        </div>

        <hr className="video__divider"></hr>
          <p className="video__description">{description}</p>
      <div>
        <div>
          <p className="video__comment-number">{arr} Comments</p>
        </div>

      </div>
      
        {console.log(comments)}
        {comments.map((comment) => {
          <p>{comments.length}</p>
          
           return (
             
             <div>

               <img src="" alt="placeholder" />
               <p>{comment.name}</p>
               <p>{comment.timestamp}</p>
               <p>{comment.comment}</p>

             </div>
           )
           
        })}
     
     </div>
    </div>
  );
}

export default VideoDetails;