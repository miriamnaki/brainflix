import React,{Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './VideoUploadPage.scss'
import TextArea from '../../components/TextArea/TextArea';
import Button from '../../components/Button/Button';
import publishIcon from '../../assets/icons/publish.svg';
import { API_URL } from '../HomePage/HomePage';
import axios from 'axios';



class VideoUploadPage extends Component {
  state ={
    title:"",
    description:"",
    redirect: false
  }

  // handle form changes
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });  
  }

  // validate data
  isFormDataValid = () => {
    const { title, description} = this.state;
    if(!title || !description) {
      return false;
    }
  }

  // function to handle form submission
  handleOnSubmit = (e) => {
   e.preventDefault();
   if(this.isFormDataValid) {
     
      // axios request to post to videos end point
      axios.post(`${API_URL}`, {
        title: e.target.title.value,
        description: e.target.description.value,
      })
      .then(res => {   
        this.setState({redirect: true})    
      })
      .catch(err => {
        return err;
      })
    } 
    e.target.reset();
 }

 // notify on form sucessful form submission
 displayNotification() {
   toast.success("Form submitted", {
     position: 'top-center',
     autoClose: 3000
   });
  
 }
  render() {
    // console.log(this.props)
    const redirectHome = this.state.redirect;
    // After form submition check if state redirect is true,
    // toast a notification and redirect to home page
    if(redirectHome) {
      this.displayNotification();
      return <Redirect to='/' />;   
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
               name="title"
               value={this.state.title}
               label="title to your video"
               placeholder="Add a title to your video"
               onChange ={this.handleChange}
             />
           </div>
 
           <div className="video-upload__input">
             <TextArea
               className= "video-upload__description"
               cols="40"
               rows="5"
               name="description"
               value={this.state.description}
               label="add a video description"
               placeholder="Add a description to your video"
               onChange ={this.handleChange}
             />
           </div>
         </div>
       </div>
       <hr className="video-upload__divider video-upload__divider--desktop"></hr>
 
       <div className="video-upload__button-cancel">
        <div className="video-upload__button">
          <Button
          value= "publish"
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

export default VideoUploadPage;