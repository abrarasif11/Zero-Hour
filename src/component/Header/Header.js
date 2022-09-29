import React from 'react';
import logo from '../../images/img_410627.png';

import './Header.css';


const Header = () => {
    return (
        <div className='header ps-5 pt-2 pb-2'>
            <h2 className='header-text'> <img className='icon' src={logo} alt="" /> Zero Hour-Active-Club</h2>
            <h6 class="ms-5">Select today’s Activities</h6>
        </div>
        
    );
};

export default Header;