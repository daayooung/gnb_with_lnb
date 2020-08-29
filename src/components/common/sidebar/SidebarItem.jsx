import React from 'react';
import { NavLink } from 'react-router-dom';

import './SidebarItem.css';

const SidebarItem = ({ navInfo }) => {
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
      >
        <span>{depth1Title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
