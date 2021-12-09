import React from 'react';
import './VideoDetails.scss';
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'
import Form from '../Form/Form';

const VideoDetails = (props) =>  {
  console.log(props)

  if(!props.selectedVideo){
    return <p>Loading Videos.....</p>
  }
  const {title, channel, timestamp,views,likes,description,comments} = props.selectedVideo;
  // const selectedVideo = props.selectedVideo.match.params.VideoDetails;
  // console.log(selectedVideo)
 
  // function to get current date
  function getCurrentDate(timestamp){
    let postedTimestamp  = new Date(timestamp);
    let currentDate = postedTimestamp.toLocaleDateString(
      'default',{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    );
    return currentDate
  }

  return (
    <div className="video">
        <div className="video__details-container">
            {/* video title */}
          <h2 className="video__title">{title}</h2>

          <hr className="video__divider video__divider--tablet-desktop"></hr>

          <div className="video__info-wrapper">
            <div className="video__channel-time-wrapper">
              {/* video channel */}
              <p className="video__channel">By {channel}</p> 
              {/* video timestamp */}
              <p className="video__time video__tags">{getCurrentDate(timestamp)}</p>
            </div>

            <div className="video__views-likes-wrapper">
              <div className="video__number-icon">
                {/* views icon */}
                <button className="video__views-button video__icon">
                  <img 
                    src={viewsIcon} 
                    alt="viewsIcon"/>
                  </button>
                <p className="video__views-count video__tags">{views}</p>
              </div>

              <div className="video__number-icon video__number-icon--likes">
                {/* likes icon */}
                <button className="video__likes-button video__icon">
                  <img 
                    src={likesIcon} 
                    alt="viewsIcon"/>
                  </button>
                  {/* number of likes */}
                <p className="video__likes-count video__tags">{likes}</p>
              </div>
            </div>
          </div>

          <hr className="video__divider"></hr>
          {/* video description */}
            <p className="video__description">{description}</p>
        
          <div>
            {/* number of comments */}
          <p className="video__comment-number">{comments.length} Comments</p>
        </div>

        {/* comments form */}
        <Form
          label= "join the converstion"
          placeholder="Add a new comment"
          src="placeholder"
          alt= 'avatar'
        />

        <hr className= "video__divider"></hr> 
          {/* video comments */}
        {comments.map((comment, index) => {
          <p>{comments.length}</p>   
           return ( 
             <>    
             <div key={timestamp} className="video__comments">
               <div className="video__comments-avatar-name-date-container">
                 <div className="video__comments-avatar-name-container">
                   {/* comments placeholder avatar */}
                  <div className="video__comments-avatar"></div>
                  {/* commenter name */}
                  <p className="video__comments-name video__channel">{comment.name}</p>
                 </div>
                 
                 {/* posted time */}
                  <p className="video__comments-time video__tags">{getCurrentDate(timestamp)}</p>

               </div>
              {/* comment */}
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