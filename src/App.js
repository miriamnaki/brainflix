import './styles/partials/_globals.scss';
import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoSelected from './components/VideoSelected/VideoSelected';
import VideoList from './components/VideoList/VideoList';
import videoDetails from './data/video-details.json';
import videos from './data/videos.json';


 class App extends Component  {
  
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
      <Header/>
      <VideoSelected selectedVideo = {this.state.selectedVideo}/>
      <div className="app">
        <div className="app__video-details">
          {/* need to review this, it breaks my application */}
          {/* {videoDetails.map((video)=> {
             <VideoDetails 
             key={video.comments.timestamp} 
             selectedVideo = {this.state.selectedVideo}
           />
          })} */}
           <VideoDetails  
             selectedVideo = {this.state.selectedVideo}
           />
        </div>

        <hr className="app__vertical-divider"></hr>

        <div className="app__video-list">
          {/* need to review this, it breaks my application */}
            
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
