import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
        <nav id="nav-bar">
                <ul>
                     {/* 
              Copy line - shift + option/alt + down
              Multiple cursors - hold option/alt + click
            */}
                    <li>
                    <Link to="/">HOME</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/project">Project</Link>
                    </li>

                </ul>
                
                
                
            </nav>
        
    )
}

export default NavBar
