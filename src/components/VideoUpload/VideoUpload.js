import {React, Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './VideoUpload.scss'
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import publishIcon from '../../assets/icons/publish.svg'

class VideoUpload extends Component {
  state ={
    redirect: false
  }

  // funtion to handle form submission
  handleOnSubmit = (e) => {
   e.preventDefault();
   e.target.reset();
   this.setState({redirect: true}) 
 }
  render() {
    const redirectHome = this.state.redirect
    // After form submition check if state redirect is true,
    // toast a notification and redirect to home page
    if(redirectHome) {
      toast.success("Form submitted",{
        position: 'top-center',
        autoClose: 5000
      })
      return <Redirect to='/' />
    }
   return (
     <> 
     {/*upload form */}
     <form  onSubmit={this.handleOnSubmit}className="video-upload">
    
       <hr className="video-upload__divider"></hr>
       <h1 className="video-upload__title">upload video</h1>
       <hr className="video-upload__divider video-upload__divider--desktop"></hr>
 
       <div className="video-upload__container">
         <div className="video-upload__label-thumbnail">
           <p className="video-upload__label">video thumbnail</p>
           <div className="video-upload__thumbnail"></div>
         </div>
 
         <div className="video-upload__input-wrapper">
 
           <div className="video-upload__input">
             <TextArea
               className= "video-upload__description"
               rows="2"
               cols="20"
               label="title to your video"
               placeholder="Add a title to your video"
             />
           </div>
 
           <div className="video-upload__input">
             <TextArea
               className= "video-upload__description"
               cols="40"
               rows="5"
               label="add a video description"
               placeholder="Add a description to your video"
             />
           </div>
         </div>
       </div>
       <hr className="video-upload__divider video-upload__divider--desktop"></hr>
 
       <div className="video-upload__button-cancel">
        <div className="video-upload__button">
          <Button
          value= "publish icon"
          icon ={publishIcon}   
          />
        </div>
         {/* if user cancels, link back to home page */}
       <Link to="/" className="video-upload__cancel-wrapper">
          <p className="video-upload__cancel">cancel</p>
       </Link>
       </div>        
     </form>
     </>
   );
  }
 
  
 
}

export default VideoUpload;