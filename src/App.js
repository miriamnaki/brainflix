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

  render(){
    return (
      <>
      <Header/>
      <VideoDetails selectedVideo = {this.state.selectedVideo}/>
      <VideoList videoList={this.state.videoList}/>
      </>
     
    );

  }
}

export default App;
