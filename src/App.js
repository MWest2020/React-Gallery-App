import React, { Component } from 'react';

// import './App.css';
import {
  Switch,
  Route,
  Redirect,
  
} from 'react-router-dom';
import axios from 'axios';


//App components

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
// import PageNotFound from './Components/NotFound';
import apiKey from './config';


export default class App extends Component {
  
  
  //state
    state = {
      photos: [],
      cats: [],
      dogs: [],
      computers: [],
      query: '',
      searchString: [],
      loading: true
    };
  

  
  componentDidMount() {
    this.performSearch()
    this.performSearch('cats')
    this.performSearch('dogs')
    this.performSearch('computers')
    // if(window.location.pathname.includes('search/')){
    //   this.performSearch(window.location.pathname.slice(8,20))
    // }
  }

  //handles and stores user input for search query
  handleUserInput = (userInput) => {
    this.setState( { query: userInput}, () => this.performSearch(this.state.query));
  }



  //api.flickr to www.flickr
  
  //Can be set to default
  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey.MY_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      //check if response.data.photos.phots can be shortened
      if(query === 'cats') {
        this.setState({
        cats: response.data.photos.photo,
        loading: false
      });
      } else if (query === 'dogs'){
        this.setState({
          dogs: response.data.photos.photo,
          loading: false
        })
      } else if (query === 'computers'){
        this.setState({
          computers: response.data.photos.photo,
          loading: false
        })
      } else if (query){
        this.setState({
          query: response.data.photos.photo,
          SearchString: query,
          loading: false
        })
      } else {
        this.setState({
          searchString: response.data.photos.photo,
          loading: false
        });
      }
    }).catch((error) => {
      console.log('Error fetching and parsing data', error)
    });
  }

        
    render() {

      return (
          
          
            <div className="container">
              
              <SearchForm onSearch={this.handleUserInput}/>
              <Nav />
    
                {/* Switch only renders the first route it matches */}
                <Switch>
                
                {
                  (this.state.loading)
                  ?<p>Loading...</p>
                  :  <Route exact path="/" render={() => <Redirect to="/cats"/>} />
                }
                <Route path={`/${this.state.SearchString}`}  render={() => <PhotoContainer data={this.state.query} title="Your Images" alt={`${this.query} Images`}/> }/>

                <Route path= "/cats" render={() => <PhotoContainer data={this.state.cats} title="Cat Images" alt="Cat Images"/>}/>
                <Route path="/dogs" render={() => <PhotoContainer data={this.state.dogs} title="Dog Images" alt="Dog Images"/> }/>
                <Route path="/computers" render={() => <PhotoContainer data={this.state.computers} title="Computer Images" alt="Computer Images"/> }/>
                
                
                <Route component={NotFound} />
                </Switch>
    
            </div>
      );
    }
}

