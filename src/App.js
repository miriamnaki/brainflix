import './styles/partials/_globals.scss';
import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import VideoDetails from './components/VideoDetails/VideoDetails';
import videoDetails from './data/video-details.json';

console.log(videoDetails)


 class App extends Component  {
   state = {
      selectedVideo: videoDetails[0]
   }

  render(){
    return (
      <>
      <Header/>
      <VideoDetails selectedVideo = {this.state.selectedVideo}/>
      </>
     
    );

  }
}

export default App;
