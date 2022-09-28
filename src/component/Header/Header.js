import React from 'react';
import logo from '../../images/fitness_room-512.webp';
import './Header.css';


const Header = () => {
    return (
        <div className= 'container'>
            <img className='icon' src={logo} alt="" /> 
            <h1 className='header-text'>Zero Hour-Active-Club</h1>
            <h5>Select today’s exercise</h5>
        </div>
        
    );
};

export default Header;