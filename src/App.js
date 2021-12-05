import './styles/partials/_globals.scss';
import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoSelected from './components/VideoSelected/VideoSelected';
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
      <VideoSelected selectedVideo = {this.state.selectedVideo}/>
      <div className="app">
        <div className="app__video-details">
          <VideoDetails
            selectedVideo = {this.state.selectedVideo}
          />
        </div>
        <hr className="app__vertical"></hr>


        <div className="app__video-list">
          <VideoList 
            videoList={filteredVideos}
            onVideoSelect={this.nextVideoHandler}
            />
        </div>

      </div>
      </>
     
    );

  }
}

export default App;
