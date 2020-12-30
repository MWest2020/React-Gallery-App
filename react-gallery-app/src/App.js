import React from 'react';
import {
  BrowserRouter,
  // Route,
  // Switch
} from 'react-router-dom';

//App components

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import './App.css';
import PhotoContainer from './Components/PhotoContainer';
import apiKey from './config';

function App() {
  
  //state

  //axios
  
  
  
  return (
   <BrowserRouter>
      
    <body>  
      <div className="container">
          
          <SearchForm />

          <Nav />

          <PhotoContainer />

        </div>
      </body>
    
   </BrowserRouter>
  );
}

export default App;
