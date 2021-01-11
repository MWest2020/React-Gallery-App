//libraries
import React, { Component } from 'react';
import axios from 'axios';

//App components
import PhotoContainer from './PhotoContainer';

//modules
import apiKey from '../config';


export default class RouteHandling extends Component {
  
    state = {
      photos: [],
      query: this.props.match.params.query,
      loading: true
  }
  
  componentDidMount() {
    this.performSearch(this.props.match.params.query);
  }

  componentDidUpdate(prevProps) {
    let prevQuery = prevProps.match.params.query;
    let query  = this.props.match.params.query;
    if(prevQuery !== query){
      this.performSearch(query);
    }
  }

  //Can be set to default
  performSearch(query){
    this.setState(
      { loading: true }
    )
    let URL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey.MY_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    axios.get(URL)
    .then((response) => {
      this.setState({
          query,
          photos: response.data.photos.photo,
          loading: false
      })
      // .catch((error) => {
      //   // Error 😨
      //   if (error.response) {
      //       /*
      //        * The request was made and the server responded with a
      //        * status code that falls out of the range of 2xx
      //        */
      //       console.log(error.response.data);
      //       console.log(error.response.status);
      //       console.log(error.response.headers);
      //   } else if (error.request) {
      //       /*
      //        * The request was made but no response was received, `error.request`
      //        * is an instance of XMLHttpRequest in the browser and an instance
      //        * of http.ClientRequest in Node.js
      //        */
      //       console.log(error.request);
      //   } else {
      //       // Something happened in setting up the request and triggered an Error
      //       console.log('Error', error.message);
      //   }
      //   console.log(error); 
      // })
    })
  }
    
        
    render() {

      return (
          <PhotoContainer
            query ={this.state.query}
            photos= {this.state.photos}
            loading={this.state.loading}/>
        )
    }
}