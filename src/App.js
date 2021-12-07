import './styles/partials/_globals.scss';
import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoSelected from './components/VideoSelected/VideoSelected';
import VideoList from './components/VideoList/VideoList';
import videoDetails from './data/video-details.json';
import videos from './data/videos.json';
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';


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
      
      <BrowserRouter>
      <Header/>
        <Switch>
          <VideoSelected selectedVideo = {this.state.selectedVideo}/>

        </Switch>
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
      </BrowserRouter>
         
    );
  }
}

export default App;
