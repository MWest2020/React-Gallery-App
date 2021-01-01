import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';


const PhotoContainer = (props) => {
    
    const results = props.data;
    let photos;

    if(results.length > 0){
        photos = results.map( photo => 
            <Photo  server={photo.server}
                    id={photo.id}
                    secret={photo.secret}
                    title={photo.title}
                    key={photo.id.toString()}
                /> 
            );
        } else {
                    photos = <NotFound />
        }
    
    return  (

        <div className="photo-container">
            <h2>{props.title}</h2>
              <ul>
                {photos}
              </ul>
        </div>
    );
} 


export default PhotoContainer;