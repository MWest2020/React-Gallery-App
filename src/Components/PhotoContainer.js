import React, {Component} from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

export default class PhotoContainer extends Component{
    render(){
    const results = this.props.photos;
    let photos;

    if(results.length > 0){
        photos = results.map( photo => 
            <Photo  
                server={photo.server}
                id={photo.id}
                secret={photo.secret}
                title={photo.title}
                key={photo.id.toString()}
                /> 
            );
        } else {
                    photos = <NotFound />;
        }
        
       
    return  (

        <div className="photo-container">
            { this.props.loading   ? <h1>Loading...</h1> 
                : ''
            }
            {this.props.loading    ? '' 
                        : <ul>{photos}</ul>
            }
        </div>
    );
    }  
} 