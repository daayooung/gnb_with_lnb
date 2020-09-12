import React from 'react';
import { NavLink } from 'react-router-dom';
import TabDepth2Contents from './TabDepth2Contents';
import './TabDepth2.css';

const TabDepth2 = ({ depth2, onClickDepth2, tab2Contents }) => {
  return (
    <li className="tab_depth2">
      <NavLink
        to={depth2.path}
        className="depth2_link"
        activeClassName="active_depth"
        onClick={onClickDepth2}
      >
        {depth2.pagename}
      </NavLink>
      {tab2Contents &&
        tab2Contents.map((tab2Contents) => (
          <TabDepth2Contents
            tab2Contents={tab2Contents}
            key={tab2Contents.contents}
          />
        ))}
    </li>
  );
};

export default TabDepth2;
