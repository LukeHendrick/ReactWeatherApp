import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Forecast from './components/Forecast.js'
import Detail from './components/Detail.js'
import Nav from './components/Nav.js'
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/forecast' component={Forecast}/>
            <Route path='/forecast/detail' component={Detail}/>
            <Route render={function () {
                return <h1>404 Not Found</h1>
                }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
