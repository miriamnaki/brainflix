import './styles/partials/_globals.scss';
import './App.scss';
import { Component } from 'react';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';

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
