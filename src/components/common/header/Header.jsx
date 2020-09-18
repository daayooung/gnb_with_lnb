import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './Header.css';

const Header = ({ onNavProfilesClick }) => {
  return (
    <header>
      <Logo />
      <Nav onNavProfilesClick={onNavProfilesClick} />
    </header>
  );
};

export default Header;
