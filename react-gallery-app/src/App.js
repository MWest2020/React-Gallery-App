import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  // Route,
  // Switch
} from 'react-router-dom';
import axios from 'axios';


//App components

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import apiKey from './config';


export default class App extends Component {
  
  constructor(){
  //state
    super();
    this.state = {
      photos: []
    };
  }

  
  componentDidMount() {
    this.performSearch();
  }

  
  
  //Can be set to default
  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey.MY_KEY}&per_page=10&format=json&nojsoncallback=1`)
    .then(response =>{
      this.setState({
        photos: response.data
        
      })
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error)
    });
  }

        

    render () {

      return (
        <BrowserRouter>
          
          
          <div className="container">
              
              <SearchForm onSearch={this.performSearch}/>
    
              <Nav />
    
              <PhotoContainer data={this.state.photos}/>
    
            </div>
        
        </BrowserRouter>
      );
    }
    
}

