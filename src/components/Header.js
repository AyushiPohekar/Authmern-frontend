import React from 'react';
import './header.css';

import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
   <>
   <header>
    <nav>
        <h1>
            Ayushi
        </h1>
        <div className='avtar'>
        <Avatar>A</Avatar>
        </div>
    </nav>
   </header>
   </>
  )
}

export default Header