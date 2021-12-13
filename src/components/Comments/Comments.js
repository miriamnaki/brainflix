import React from 'react';
import './Comments.scss';

const Comments = (props) => {
  // if(!props.selectedVideo){
  //   return <p>Loading Video</p>
  // }
  const {timestamp, comments} = props.selectedVideo;
  
  return (
    <div className="video-comments">
      {comments.map((comment) => {
          <p>{comments.length}</p>   
           return ( 
             <>    
             <div key={timestamp} className="video-comments__comments">
               <div className="video-comments__avatar-name-date-container">
                 <div className="video-comments__avatar-name-container">
                   {/* comments placeholder avatar */}
                  <div className="video-comments__avatar"></div>
                  {/* commenter name */}
                  <p className="video-comments__name video__channel">{comment.name}</p>
                 </div>
                 
                 {/* posted time */}
                  {/* <p className="video-comments__time video__tags">{getCurrentDate(timestamp)}</p> */}

               </div>
              {/* comment */}
               <p className="video-comments__description">{comment.comment}</p>
             </div>
             <hr className="video-comments__divider"></hr>
             </>
           )         
        })}  
      
    </div>
  );
};

export default Comments;