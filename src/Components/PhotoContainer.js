import React from 'react';
import NotFound from './NotFound';
import PhotoList from './PhotoList';
// import { Route, NavLink, Redirect } from 'react-router-dom';

//Components

const PhotoContainer = (props) => {

    console.log(props);
    // console.log(props);
    return(
        
        <div className="photo-container">
          <h2>Results</h2>
          <ul>
            <li>
              <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
            </li>

            <li>
              <img src="https://farm66.staticflickr.com/65535/50782302718_fbc8d1a10b.jpg" alt="" />
            </li>

            {/* <li>
              <img src={`http://farm${props.data.photos.photo.farm}.static.flickr.com/${props.data.photos.photo.server}/${props.data.photos.photo.id}_${props.data.photos.photo.secret}.jpg`} alt="" />
            </li> */}

           

            {/* <PhotoList data={props.photos}/> */}
            {/* <PhotoList /> */}
            {/* <NotFound /> */}
          </ul>
        </div>

    )
}

export default PhotoContainer;