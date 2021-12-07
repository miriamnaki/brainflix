import React from 'react';
import VideoSelected from '../../VideoSelected/VideoSelected';
import VideoDetails from '../../VideoDetails/VideoDetails';
import VideoList from '../../VideoList/VideoList';
import { Component } from 'react';
import videos from '../../../data/videos.json';
import videoDetails from '../../../data/video-details.json';

class HomePage extends Component{
  state = {
    selectedVideo: videoDetails[0],
    videoList: videos
 }
 
//  function to update state when video is clicked
 nextVideoHandler = (id) => {
   this.setState({
     selectedVideo: videoDetails.find(video => video.id === id)
    })
 }
  render(){
    // Removing selected video from list
    const filteredVideos = videos.filter(video => video.id !== this.state.selectedVideo.id)
    return (
      <>
         <VideoSelected selectedVideo = {this.state.selectedVideo}/>
      <div className="app">
        <div className="app__video-details">
           <VideoDetails  
             selectedVideo = {this.state.selectedVideo}
           />
        </div>

        <hr className="app__vertical-divider"></hr>

        <div className="app__video-list">         
            <VideoList  
              videoList={filteredVideos}
              onVideoSelect={this.nextVideoHandler}
              />
        </div>
      </div>
      </>
    )

  }
}

export default HomePage;