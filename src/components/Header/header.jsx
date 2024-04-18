import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/login.actions'; // Importez l'action de déconnexion

import Logo from '../../img/argentBankLogo.png'

import './header.css';

function Header () {
    const dispatch = useDispatch();
    const { isConnected } = useSelector(state => state.login); // Obtenez l'état de connexion à partir du Redux store
    const [isUserConnected, setIsUserConnected] = useState(false)
    const handleLogout = () => {
        dispatch(logout()); // Déclenchez l'action de déconnexion lorsque l'utilisateur clique sur le bouton "Logout"
    };

    useEffect(() => {
        if (isConnected) {
            setIsUserConnected(true)
        } else {
            setIsUserConnected(false)
        }
      }, [isConnected, setIsUserConnected]);
    

    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Bank Logo" />
                </Link>
                <div className='not-connected'>        
                    <i className="fa-solid fa-circle-user"></i>
                    {/* Changez le texte du bouton en fonction de l'état de connexion */}
                    {isUserConnected ? (
                        
                        <Link onClick={handleLogout}><p>Logout</p></Link>
                    ) : (
                        <Link to="/login"><p>Sign In</p></Link>
                    )}
                </div>
            </nav>
        </header>
    ) 
}

export default Header;
