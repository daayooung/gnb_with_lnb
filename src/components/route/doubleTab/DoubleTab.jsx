import React, { useState } from 'react';
import { series } from '../../../api/SeriesData.json';
import TabDepth1 from './TabDepth1';
import TabDepth2 from './TabDepth2';
import './DoubleTab.css';

const DoubleTabContents = () => {
  let depth2Data = series.map((data) => data.depth2).flat();
  const [tab2, settab2] = useState();
  const [tab2Contents, settab2Contents] = useState();

  const onClickDepth1 = (e) => {
    let currentTab1 = series.find(
      (series) => e.currentTarget.pathname === series.path
    ).depth2;
    settab2(currentTab1);
  };

  const onClickDepth2 = (e) => {
    let currentTab2 = depth2Data.filter(
      (data) => e.currentTarget.pathname === data.path
    );
    settab2Contents(currentTab2);
  };

  return (
    <div className="tab">
      <ul className="tab1">
        {series.map((series) => (
          <TabDepth1
            series={series}
            onClickDepth1={onClickDepth1}
            key={series.path}
          />
        ))}
        <li>
          <ul className="tab2">
            {tab2 &&
              tab2.map((depth2, i) => (
                <TabDepth2
                  key={depth2 + i}
                  depth2={depth2}
                  onClickDepth2={onClickDepth2}
                  tab2Contents={tab2Contents}
                />
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DoubleTabContents;
