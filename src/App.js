//import logo from './logo.svg';
import './App.css';

import Movie from './Movies';
import Seats from './Seats';
import Navigation from './Navigation';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Movie} exact/>
             <Route path ="/seats" component={Seats} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
