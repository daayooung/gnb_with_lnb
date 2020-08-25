import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <h1 className="logo">
      <Link to="/">
        <img
          src={require('../../../images/harrypotter_logo_white.png')}
          alt="해리포터 로고"
        ></img>
      </Link>
    </h1>
  );
};

export default Logo;
