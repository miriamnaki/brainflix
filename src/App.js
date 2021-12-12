import './styles/partials/_globals.scss';
import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoSelected from './components/VideoSelected/VideoSelected';
// import VideoList from './components/VideoList/VideoList';
// import videoDetails from './data/video-details.json';
// import videos from './data/videos.json';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter,Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import VideoUploadPage from './components/pages/VideoUploadPage/VideoUploadPage';
import VideoListPage from './components/pages/VideoListPage/VideoListPage';
// import VideoUploadPage from './components/pages/VideoUploadPage/VideoUploadPage';
import VideoDetailsPage from './components/pages/VideoDetailsPage/VideoDetailsPage';


 class App extends Component  {


  render(){
    
    return (
      
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
        <Switch>
            <Route path='/' exact component={HomePage}></Route>

            <Route path="/video-upload" component={VideoUploadPage}></Route>
            <Route path="/videos/:videoId"  component={HomePage}></Route>
              
        </Switch>

      </BrowserRouter>
         
    );
  }
}

export default App;
