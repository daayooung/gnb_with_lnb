import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavSub.css';

const NavSub = ({ depth1Path, navInfo, onNavProfilesClick }) => {
  return (
    <ul className="depth2">
      {navInfo.map((depth2) => {
        const depth2Path = depth2.path;
        const depth2Pagename = depth2.pagename;

        return (
          <li key={depth2Path}>
            <NavLink
              activeClassName="active"
              to={depth1Path + depth2Path}
              exact
              onClick={() => onNavProfilesClick(depth2Path)}
            >
              {depth2Pagename}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavSub;
