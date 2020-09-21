import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pagenation.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page_item">
            <NavLink
              to="#"
              onClick={() => paginate(number)}
              className="page_link"
              activeClassName="active_page"
            >
              <span>{number}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
