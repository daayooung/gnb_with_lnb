import React from 'react';
import { withRouter } from 'react-router-dom';
import NavItem from './NavItem';
import { sitemap } from '../../../api/Sitemap.json';
import './Nav.css';

const Nav = ({ onNavProfilesClick }) => {
  return (
    <nav>
      <ul>
        {sitemap.map((sitemap) => (
          <NavItem
            key={sitemap.path}
            navInfo={sitemap}
            onNavProfilesClick={onNavProfilesClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Nav);
