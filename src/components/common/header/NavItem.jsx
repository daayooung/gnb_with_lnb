import React from 'react';
import { NavLink } from 'react-router-dom';
import NavSub from './NavSub';
import './NavItem.css';

const NavItem = ({ navInfo, onNavProfilesClick }) => {
  const depth1Path = navInfo.path;
  const depth1Title = navInfo.pagename;
  const depth2 = navInfo.depth2;

  return (
    <li className="depth1">
      <NavLink
        className="depth1_link"
        activeClassName="active"
        to={depth1Path}
        exact
        onClick={() => onNavProfilesClick(depth1Path)}
      >
        <span>{depth1Title}</span>
      </NavLink>
      {depth2.length > 0 && (
        <NavSub
          depth1Path={navInfo.path}
          navInfo={depth2}
          onNavProfilesClick={onNavProfilesClick}
        />
      )}
    </li>
  );
};

export default NavItem;
