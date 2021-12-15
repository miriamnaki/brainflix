import React from 'react';
import './VideoDetails.scss';
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'
import Form from '../Form/Form';
import { v4 as uuidv4 } from 'uuid';

const VideoDetails = (props) =>  {

  if(!props.selectedVideo){
    return <p>Loading Video details</p>
  }
  // props passed from Home Page parent component
  // destructuring out needed props
  const {title, channel, timestamp,views,likes,description,comments} = props.selectedVideo;
  // const {getCurrentDate} = props;
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
    <div className="video" key={uuidv4()}>
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
                    alt="views icon"/>
                </button>
                <p className="video__views-count video__tags">{views}</p>
              </div>

              <div className="video__number-icon video__number-icon--likes">
                {/* likes icon */}
                <button className="video__likes-button video__icon">
                  <img 
                    src={likesIcon} 
                    alt="likes icon"/>
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
        <Form/>

        <hr className= "video__divider"></hr> 
            
     </div>
    </div>
  );
}

export default VideoDetails;