import {React, Component} from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import commentIcon from '../../assets/icons/add_comment.svg';
import { API_URL } from '../../pages/HomePage/HomePage';
import './Form.scss'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Form extends Component {
  state ={
    comment: "",
    redirect: false
  }

  // handle form change
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  // validate form data
 isFormValid = () => {
   const {comment} = this.state;

   if(!comment) {
     return false;
   }
 }

  // handle form submition
  handleOnSubmit = (e) => {
    e.preventDefault();

    const videoId = this.props.selectedVideo.id;
    if(this.isFormValid) {
      // axios post request to comments end point
      axios.post(`${API_URL}/${videoId}/comments`, {
        comment: e.target.comment.value,
      })
      .then(res => {
        // comments cannot post without a refresh of page! Please leave me some feed back about this! Am i missing something?
          alert('Comment submitted') 
          this.setState({redirect: true});     
      })
      .catch(err => {
        return err;
      })
    }
    e.target.reset();
  }
  
  render() {   
    const videoId = this.props.selectedVideo.id; 
    const rerenderComments = this.state.redirect;
    // After form submition check if state redirect is true,
    // toast a notification and redirect to home page
    if(rerenderComments) {
      return <Redirect to={`/videos/${videoId}`} /> 
    }
 
    return (
     
      <div className="form">  
        <form onSubmit={(e) => this.handleOnSubmit(e, this.props.selectedVideo.id)} className="form__container">
          <div className="form__wrapper"> 
          {/* avatar */}
              <div className="form__avatar"> 
                <Avatar/>      
              </div>
  
                {/* text area */}
              <div className= "form__text-area">
              <TextArea
                cols="40"
                rows="6"
                name='comment'
                value={this.props.comment}
                label="join the converstion"
                placeholder="Add a new comment"
                className="form__description"
                onChange={this.handleChange}
              />
              </div>
            </div>  
            {/* Button */}
            <div className="form__button">
              <Button
                value='comment'
                icon ={commentIcon}
                alt='comment icon'
              />
            </div>       
        </form>
        
      </div>
    );
  }
}

export default Form;