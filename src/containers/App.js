import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Songform from './Songform';
import SongsPage from './SongsPage';
import SongsShow from './SongsShow';
import NavBar from './NavBar';
import SongEdit from './SongEdit';
import WelcomePage from './WelcomePage';
import ViewPage from './ViewPage';
import '../stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const App = (props) => 

  <Router>
    <div>  
      <NavBar/>
      <Route exact path="/"  component={WelcomePage}/>
      <Route exact path="/songs/show"  component={SongsShow}/>
      <Route path="/songs" component={SongsPage} />
      <Route exact path="/new" component={Songform} />
      <Route exact path="/song/edit" component={SongEdit}/>
      <Route exact path="/song/view" component={ViewPage}/>
    </div>
  </Router>;

export default App;