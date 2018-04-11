import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import SongsPage from '../containers/SongsPage';
import Songform from '../containers/Songform'
import Welcome from './Welcome';
import '../stylesheets/App.css';

const logo = "gear-logo-icon-92970.png"

const App = (props) => 

  <Router>
    <div>

      <div className = "Logo">
        <h1>The Tab Factory
        <img src={`/${logo}`} width="30px" height = "30px" alt="Gear Logo" className = "App-logo"/>
        </h1>
      </div>
      <Route exact path="/" component={Welcome}/>
      <Route path="/songs" component={SongsPage} />
    
      <div className = "New-song">
        <h3> Create a new tab: </h3>
        <Songform/>
      </div>

    </div>
  
  </Router>;



export default App;