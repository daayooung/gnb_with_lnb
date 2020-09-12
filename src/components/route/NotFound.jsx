import React from 'react';
import './contents/Contents.css';

const NotFound = ({ location }) => {
  return (
    <div className="contents">
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>{location.pathname}</p>
    </div>
  );
};

export default NotFound;
