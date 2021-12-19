import './styles/partials/_globals.scss';
import './App.scss';
import { Component } from 'react';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import VideoUploadPage from './components/pages/VideoUploadPage/VideoUploadPage';
// import axios from 'axios';
// import Loader from "react-loader-spinner";
// import VideoDetails from './components/VideoDetails/VideoDetails';
// export const API_URL = 'http://localhost:8080/videos';
// export const API_URL = `${process.env.REACT_APP_API_URL}`;
// console.log('api', API_URL)


class App extends Component  {
 
  
  render(){   
    
    return (    
      <BrowserRouter>
      {/* Notification after form submition */}
      <ToastContainer/>
      <Header/>
        <Switch>
            <Route path='/' exact component={HomePage}/>            
            <Route path="/video-upload" component={VideoUploadPage}/>
            <Route path="/videos/:videoId"  component={HomePage}/>
        </Switch>
      </BrowserRouter>        
    );
  }
}

export default App;
