import React, { Component } from 'react';

// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

//App components
import RouteHandling from './Components/RouteHandling';
import PageNotFound from './Components/PageNotFound';
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm';

export default class App extends Component {

  render() {

      return (
          
            <div className="container">
              
                <Router>
                  
                  <Nav/>
                  <SearchForm/> 

                  <Switch>
                
                    <Route exact path="/" render={() => <Redirect to="/search/random"/>} />
                    <Route exact path="/search/" render={() => <Redirect to="/search/random"/>} />
                    <Route exact path="/search/:query" component={RouteHandling}/>
                    <Route component={PageNotFound} />
                  </Switch>
                </Router>
    
            </div>
      );
    }
}

