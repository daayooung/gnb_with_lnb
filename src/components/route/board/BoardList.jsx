import React from 'react';
import BoardItem from './BoardItem';
import './BoardList.css';

const BoardList = ({ boardData }) => {
  console.log(boardData);
  return (
    <div className="board_list">
      {boardData
        .sort((a, b) => {
          return new Date(b.number) - new Date(a.number);
        })
        .map((data) => (
          <BoardItem data={data} key={data.number} />
        ))}
    </div>
  );
};

export default BoardList;
