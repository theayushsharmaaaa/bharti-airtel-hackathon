import React from 'react';
import './Header.css';



const Header = () => {
  return (
        <header className="header">
            <div className="logo">GuruLink</div>
            <nav className="nav">
                <a href="#about">About Us</a>
            </nav>
        </header>
    );
};

export default Header;
