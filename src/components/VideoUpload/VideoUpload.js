import React from 'react';
import './VideoUpload.scss'
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import Input from '../Input/Input';
import Button from '../Button/Button';
import publishIcon from '../../assets/icons/publish.svg'

function VideoUpload() {
  return (
    <div className="video-upload">
      <h1 className="video-upload__title">upload video</h1>
      <h2>video thumbnail</h2>
      <img className="video-upload__thumbnail" src={thumbnail} alt="thumbnail" />
      <h2>title your video</h2>
      <Input/>
      <h2>add a video desctiption</h2>
      <Input/>
      <Button
       value= "publish"
       icon ={publishIcon}
      />
        
    </div>
  );
}

export default VideoUpload;