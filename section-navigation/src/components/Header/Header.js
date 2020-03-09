import React, {useState} from 'react';
// import {Link} 

import './styles.scss'


function Header()  {
    const [links] = useState(['Meню', 'O нас', 'Контакты']);


    return (
        <header>
            <div className='header_logo'>
                <p className='text header_logo__text'>Harry Potter Section Navigation</p>
            </div>
        </header>
    )
    
}

export default Header;