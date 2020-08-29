import React from 'react';
import { withRouter } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import { sitemap } from '../../../api/Sitemap.json';
import './Sidebar.css';

const Sidebar = () => {
  const depth2 = sitemap.map((sitemap) => sitemap.depth2).flat();

  return (
    <nav className="sidebar">
      <ul>
        {/* {depth2.map((sitemap) => (
          <SidebarItem key={sitemap.path} navInfo={depth2} />
        ))} */}
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
