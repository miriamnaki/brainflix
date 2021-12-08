import React from 'react';
import './VideoUpload.scss'
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import TextArea from '../TextArea/TextArea';
import Input from '../Input/Input';
import Button from '../Button/Button';
import publishIcon from '../../assets/icons/publish.svg'

function VideoUpload() {
  return (
    <div className="video-upload">
      <hr className="video-upload__divider"></hr>
      <h1 className="video-upload__title">upload video</h1>
      <p className="video-upload__label">video thumbnail</p>
      <div className="video-upload__thumbnail"></div>
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
      
      <div className="video-upload__button">
        <Button
        value= "publish"
        icon ={publishIcon}
        />
      </div>

      
      <p className="video-upload__cancel">cancel</p>
        
    </div>
  );
}

export default VideoUpload;