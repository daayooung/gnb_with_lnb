import React, { useState, useEffect } from 'react';
import BoardEditor from './BoardEditor';
import './Board.css';

const Board = () => {
  return (
    <div>
      <BoardEditor />
      <div>보드</div>
    </div>
  );
};

export default Board;
