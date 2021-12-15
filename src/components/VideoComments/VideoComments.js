import React from 'react';
import './VideoComments.scss';
import { v4 as uuidv4 } from 'uuid';


function VideoComments(props) {

  if(!props.selectedVideo){
    return <p>Loading Comments</p>
  }

  const {comments} = props.selectedVideo;

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
    <div className="video-comments">
      {comments.map((comment) => {
        return ( 
          <div key={uuidv4()}>    
          <div className="video-comments__comments">
            <div className="video-comments__avatar-name-date-container">
              <div className="video-comments__avatar-name-container">
                {/* comments placeholder avatar */}
              <div className="video-comments__avatar"></div>
              {/* commenter name */}
              <p className="video-comments__name video__channel">{comment.name}</p>
              </div>
              
              {/* posted time */}
              <p className="video-comments__time video__tags">{getCurrentDate(comment.timestamp)}</p>

            </div>
          {/* comment */}
            <p className="video-comments__description">{comment.comment}</p>
          </div>
          <hr className="video-comments__divider"></hr>
          </div>
        )         
      })}  
      
    </div>
  );
  
};

export default VideoComments;