import React from 'react';
import { Link } from 'react-router-dom';



import Logo from '../../img/argentBankLogo.png'

import './header.css';

function Header () {
    /* Updates user data on header component from state redux */
    
    return (
        <header>
            <h1 className='sr-only'>Argent Bank</h1>
            <nav>
            <Link to ="/">
               <img src={Logo} alt="Bank Logo" />
            </Link>
               

               <div className='not-connected'>        
                    <i className="fa-solid fa-circle-user"></i>
                    <Link to="/login"><p>Sign In</p></Link> 
                          
               </div>
            </nav>
        </header>
    ) 
}

export default Header