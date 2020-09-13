import React, { useState, useCallback } from 'react';
import BoardList from './BoardList';
import BoardEditor from './BoardEditor';
import './Board.css';

const Board = ({ boardData, onInsert }) => {
  const [modal, setModal] = useState(false);
  const onClickEditBtn = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <div>
      <BoardList boardData={boardData} />
      <button className="btn_edit" onClick={(e) => onClickEditBtn(e)}>
        글쓰기
      </button>
      {modal && <BoardEditor onInsert={onInsert} />}
    </div>
  );
};

export default Board;
