import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabDepth1.css';

const TabDepth1 = ({ series, onClickDepth1 }) => {
  return (
    <li className="tab_depth1">
      <NavLink
        to={series.path}
        className="depth1_link"
        activeClassName="active_depth"
        onClick={onClickDepth1}
      >
        {series.pagename}
      </NavLink>
    </li>
  );
};

export default TabDepth1;
