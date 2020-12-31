import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = (props) => {
    
    // const results = props.data;
    // let photos;

    // if(results.length > 0){
    //     photos = results.map( photo => 
    //         <Photo url={`http://farm${ this.data.photos.photo.farm}.static.flickr.com/${this.data.photos.photo.server}/${this.data.photos.photo.id}_${this.data.photos.photo.secret}.jpg`}
    //         key={this.data.photos.photo.id} /> );
    //     } else {
    //     return <NotFound />
    //     }
    
    return(
        <ul>
            {/* {photos} */}
        </ul>
    );
} 

export default PhotoList;