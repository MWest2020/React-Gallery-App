import React from 'react';
import { NavLink} from 'react-router-dom';

//Components
// import Cats from '..react-gallery-app/src/Components/Catgories/Cats.js';

const Nav = () => {

    return(
        
        <div>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to={`/cats`}>Cats</NavLink></li>
                    <li><NavLink to={`/dogs`}>Dogs</NavLink></li>
                    <li><NavLink to={`/computers`}>Computers</NavLink></li>
                </ul>
            </nav>
            
        </div>  
    )
}

export default Nav;