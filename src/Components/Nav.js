import React from 'react';
import { NavLink} from 'react-router-dom';

const Nav = () => {

    return(
        
        <div>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/search/landscapes">Landscapes</NavLink></li>
                    <li><NavLink to="/search/paintings">Paintings</NavLink></li>
                    <li><NavLink to="/search/art">Art</NavLink></li>
                </ul>
            </nav>
            
        </div>  
    )
}

export default Nav;