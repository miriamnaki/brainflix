import './styles/partials/_globals.scss';
import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoList from './components/VideoList/VideoList';
import videoDetails from './data/video-details.json';
import videos from './data/videos.json';

console.log(videoDetails)


 class App extends Component  {
   state = {
      selectedVideo: videoDetails[0],
      videoList: videos
   }
   

   nextVideoHandler = (id) => {
     console.log('This is a', id)
     this.setState({
       selectedVideo: videoDetails.find(video => video.id === id)
      })
   }

  render(){
    // console.log(this.state.selectedVideo)

    const filteredVideos = videos.filter(video => video.id !== this.state.selectedVideo.id)
    console.log(videos.id)

    return (
      <>
      <Header/>
      <VideoDetails
        selectedVideo = {this.state.selectedVideo}
       />
      <VideoList 
        videoList={filteredVideos}
        onVideoSelect={this.nextVideoHandler}
        />
      </>
     
    );

  }
}

export default App;
