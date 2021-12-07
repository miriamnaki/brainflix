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
import HomePage from './components/pages/HomePage/HomePage';


 class App extends Component  {


  render(){
    
    return (
      
      <BrowserRouter>
      <Header/>
        <Switch>
            <Route path="/" exact={true}
             render={(routerProps) => {
              return (
                <HomePage/>
              )
            }}
            ></Route>
        </Switch>

      </BrowserRouter>
         
    );
  }
}

export default App;
