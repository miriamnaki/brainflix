import React,{ Component } from 'react';
import VideoSelected from '../../components/VideoSelected/VideoSelected';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';
import VideoComments from '../../components/VideoComments/VideoComments';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export const API_KEY = '9c603683-73d2-4f20-accc-e82961045b5a';
export const API_URL = `${process.env.REACT_APP_API_URL}/videos`;
 
const getAllVideos = () => axios.get(`${API_URL}`)

class HomePage extends Component{
   
  state = {
    videoList: [], 
    selectedVideo: null,  
    videoDetails: [] 
  }

// initial video fetch
componentDidMount(){
  // current video
  let currentVideo = this.props.match.params.videoId;
  getAllVideos()
  .then((response) => {
    // video list
    let fetchedList = response.data;

    this.setState({
      videoList: fetchedList,
    })

    // video currently playing
    const mainVideo =  currentVideo ?  currentVideo : response.data[0].id;
    this.fetchDetails(mainVideo);
        
  })
  .catch(err => {
    return err
  })
}

// updating the state when new video is selected
componentDidUpdate(prevProps){
  let currentVideo = this.props.match.params.videoId;
  const homeUrl = this.props.match.params.url;

  if(prevProps.match.params.videoId !== currentVideo && currentVideo) {
    this.fetchDetails(currentVideo);
  }

  if(!this.state.selectedVideo || (currentVideo === homeUrl && this.state.selectedVideo.id !== this.state.videoList[0].id)) {
      this.fetchDetails(this.state.videoList[0].id);
  }
}

// function to fetch the details of a currently selected video
fetchDetails = (videoId) => {
  
  axios.get(`${ API_URL}/${videoId}`)
    .then(res => {
      const result = res.data;   
      this.setState({
      selectedVideo: result
    })
  }) 
  .catch(err => {
    return err
  })    
}


  render(){ 

    if (!this.state.selectedVideo) {
      // Using the loader library of display spinner when data is being fetched
      return <Loader
      type="ThreeDots"
      color= "blue"
      height={50}
      width={50}
      timeout={3000} 
      />
    }
    // Removing selected video from list
    const list = this.state.videoList;
    console.log(list)
    console.log(this.state.videoList)
    const filteredVideos = list.filter(video => video.id !== this.state.selectedVideo.id);

    return (
      <>
        <VideoSelected selectedVideo = {this.state.selectedVideo}/>
        <div className="app">
          <div className="app__video-details">
            <VideoDetails selectedVideo = {this.state.selectedVideo}/>
            <div className="app__video-comments">
              <VideoComments selectedVideo = {this.state.selectedVideo}/>
            </div>
          </div>

          <hr className="app__vertical-divider"></hr>

          <div className="app__video-list">         
              <VideoList videoList={filteredVideos}/>
          </div>
        </div>
      </>
    )

  }
}

export default HomePage;