import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { series_data as series } from '../../api/series_data.json';
import './TabContents.css';

const TabContents = () => {
  const [contents, setContents] = useState(series[0].contents);

  const onClickTab = (e) => {
    let currentPage = series.filter(
      (series) => e.currentTarget.pathname === series.path
    );
    setContents(currentPage.map((series) => series.contents)[0]);
    console.log(contents);
  };

  return (
    <>
      <ul className="tab">
        {series.map((series) => (
          <li key={series.path}>
            <NavLink
              to={series.path}
              className="tab_title"
              activeClassName="active_tab"
              onClick={onClickTab}
            >
              {series.pagename}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="tab_contents">
        {contents.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Q) map: 최초 contents외에 setContents로 바꾼 값에는 <li></li>가 적용되지 않는다.
       filter: <li></li>가 아예 적용되지 않는다.*/}
    </>
  );
};

export default TabContents;
