import React from 'react';
import VideoSelected from '../../VideoSelected/VideoSelected';
import VideoDetails from '../../VideoDetails/VideoDetails';
import VideoList from '../../VideoList/VideoList';
import { Component } from 'react';
import axios from 'axios';
// import videos from '../../../data/videos.json';
// import videoDetails from '../../../data/video-details.json';
// import { API_KEY } from './HomePage';
export const API_KEY = '9c603683-73d2-4f20-accc-e82961045b5a';
export const API_URL = 'https://project-2-api.herokuapp.com/videos';


const allVideos = axios.get(`${API_URL}?api_key=${API_KEY}`)

class HomePage extends Component{
  state = {
    // selectedVideo: videoDetails[0],
    // videoList: videos
    videoList: [],
    selectedVideo: null
 }
 
//  function to update state when video is clicked
//  nextVideoHandler = (id) => {
//    this.setState({
//      selectedVideo: videoDetails.find(video => video.id === id)
//     })
//  }


// initial video fetch
componentDidMount(){
  allVideos
  .then((response) => {
    console.log(response.data)

    // setstate for the fetched videos
    let fetchedList = response.data
    const firstVideoId = response.data[0].id

    axios.get(`${ API_URL}/${firstVideoId}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res)
      const selected = res.data
      console.log(selected)
      this.setState({
        videoList: fetchedList,
        selectedVideo: selected        
    })
    })   
  })
}

  render(){
    // Removing selected video from list
    // const filteredVideos = videos.filter(video => video.id !== this.state.selectedVideo.id)
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
              videoList={this.state.videoList}
              // videoList={filteredVideos}
              // onVideoSelect={this.nextVideoHandler}
              />
        </div>
      </div>
      </>
    )

  }
}

export default HomePage;