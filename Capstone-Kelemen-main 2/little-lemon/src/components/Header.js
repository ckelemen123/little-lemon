import React from 'react';
import logo from './logo.png';

const Header = () => {

  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );  
};

export default Header;