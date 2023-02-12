import React from 'react';
import './Navbar.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';



const Navbar = () => {
  const [click, setClick] = useState(false);
  
  function handleClick() {
    setClick(!click);
  }
  return (
    <>
    <header>
            <nav className='nav-bar'>
                <img src={Logo} alt='Logo' width={50} />
                <div className={clicked ? "nav-items active" : "nav-items"}></div>

                <ul className='nav-menu'>
                <li>
                   <Link className='nav-link' to='/' >Home </Link>
                </li>
                <li>
                   <Link className='nav-link' to='/Menu' >Menu </Link>
                </li>
                <li>
                   <Link className='nav-link' to='/Delivery' >Delivery </Link>
                </li>
                <li>
                   <Link className='nav-link' to='/About' >About </Link>
                </li>
                <li>
                   <Link className='nav-link' to='/Contact' >Contact </Link>
                </li>

                <li>
                  <button> Order Now</button>
                </li>
                </ul>

              <div className='hamburger'>
              <i className={clicked ? "fas fa-times" : "fas fa-bars"}
                            onClick={handleClick}></i>
                    </div>
            </nav>
            </header>
            </>
  );
}

export default Navbar;