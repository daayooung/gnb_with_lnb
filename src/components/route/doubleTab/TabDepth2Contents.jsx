import React from 'react';
import './TabDepth2Contents.css';

const TabDepth2Contents = ({ tab2Contents }) => {
  return (
    <div className="depth2_contents">
      <p>{tab2Contents.contents}</p>
    </div>
  );
};

export default TabDepth2Contents;
