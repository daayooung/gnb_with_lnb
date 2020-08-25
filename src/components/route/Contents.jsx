import React from 'react';
import { data } from '../../api/Data.json';
import './Contents.css';

const Contents = ({ history }) => {
  let currentPage = history.location.pathname;
  const subNav = history.location.pathname.split('/')[2];

  let depth1Data = data.find((data) => data.path === currentPage);
  let depth2 = data
    .filter((data) => data.depth2.length > 0)
    .map((data) => data.depth2)
    .flat();
  let depth2Data = depth2.filter((data) => data.path === currentPage);

  console.log({ currentPage, depth2, depth2Data });

  let initData;
  if (!subNav) {
    initData = depth1Data;
  } else {
    initData = depth2Data;
  }

  return (
    <div className="contents">
      {currentPage === '/' && (
        <img
          src={require('../../images/hogwart_mark.png')}
          alt="호그와트 마크"
        ></img>
      )}
      <p>{initData.contents}</p>
      {initData === depth2Data &&
        initData.map((data) => <p key={data.path}>{data.contents}</p>)}
    </div>
  );
};

export default Contents;
