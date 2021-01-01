import React, { Component } from 'react';
//,aybe not necessary
import './App.css';
import {
  
  Route,
  
} from 'react-router-dom';
import axios from 'axios';


//App components

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import apiKey from './config';


export default class App extends Component {
  
  
  //state
    state = {
      photos: [],
      cats: [],
      dogs: [],
      computers: [],
      query: [],
      loading: true
    };
  

  
  componentDidMount() {
    this.performSearch()
    this.performSearch('cats')
    this.performSearch('dogs')
    this.performSearch('computers')
    // this.performSearch('query')
  }

  //api.flickr to www.flickr
  
  //Can be set to default
  performSearch = (query ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey.MY_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
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
      } else if (query === 'query'){
        this.setState({
          query: response.data.photos.photo,
          loading: false
        })
      } else {
        this.setState({
          images: response.data.photos.photo,
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
              
              <SearchForm onSearch={this.performSearch}/>
              <Nav />
    
              
                <Route path= "/cats" render={() => <PhotoContainer data={this.state.cats} title="Cat Images" alt="Cat Images"/>}/>
                <Route path="/dogs" render={() => <PhotoContainer data={this.state.dog} title="Dog Images" alt="Dog Images"/> }/>
                <Route path="/computers" render={() => <PhotoContainer data={this.state.computers} title="Computer Images" alt="Computer Images"/> }/>
                <Route path="/:query"  render={() => <PhotoContainer data={this.state.query} title={`${this.query} Images`} alt={`${this.query} Images`}/> }/>
                

                {
                  (this.state.loading)
                  ?<p>Loading...</p>
                  :  <Route exact path="/" render={() => <PhotoContainer data={this.state.images} title=""/>} />
                }
              
    
            </div>
         
          
        
      );
    }
    
}

