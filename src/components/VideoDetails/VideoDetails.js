import React from 'react';
import './VideoDetails.scss';
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'
import Form from '../Form/Form';

const VideoDetails = (props) =>  {
  console.log('video detail props',props)
  const {video, title, image, channel, timestamp,views,likes,description,comments} = props.selectedVideo;
  // let arr = comments.length
  console.log(comments)
  let postedTimestamp  = new Date(timestamp);
  let currentDate = postedTimestamp.toLocaleDateString(
    'default',{
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
  );

   
  // console.log(arr)
  // console.log(comments)
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

          <hr className="video__divider video__divider--tablet-desktop"></hr>

        <div className="video__info-wrapper">
          <div className="video__channel-time-wrapper">
            <p className="video__channel">By {channel}</p>
            
            
            <p className="video__time video__tags">{currentDate}</p>
          </div>

          <div className="video__views-likes-wrapper">
            <div className="video__number-icon">
              <button className="video__views-button video__icon"><img src={viewsIcon} alt="viewsIcon" /></button>

              <p className="video__views-count video__tags">{views}</p>
            </div>

            <div className="video__number-icon video__number-icon--likes">
              <button className="video__likes-button video__icon"><img src={likesIcon} alt="viewsIcon" /></button>
              <p className="video__likes-count video__tags">{likes}</p>

            </div>

          </div>

        </div>

        <hr className="video__divider"></hr>
          <p className="video__description">{description}</p>
      
        <div>
          {/* <p className="video__comment-number">{arr} Comments</p> */}
        </div>

        <Form
          label= "join the converstion"
          placeholder="Add a new comment"
          src="placeholder"
          alt= 'avatar'
        />

        <hr className= "video__divider"></hr>
      
        {console.log(comments)}
        {comments.map((comment) => {
          let postedTimestamp  = new Date(comment.timestamp);
          let currentDate = postedTimestamp.toLocaleDateString('default',{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
          <p>{comments.length}</p>   
           return ( 
             <>    
             <div className="video__comments">
               <div className="video__comments-avatar-name-date-container">
                 <div className="video__comments-avatar-name-container">
                  <div className="video__comments-avatar"></div>
                  <p className="video__comments-name video__channel">{comment.name}</p>
                 </div>
                 
                  <p className="video__comments-time video__tags">{currentDate}</p>
               </div>

               <p className="video__comments-description">{comment.comment}</p>
             </div>
               <hr className="video__divider"></hr>
             </>
           )         
        })}    
     </div>
    </div>
  );
}

export default VideoDetails;