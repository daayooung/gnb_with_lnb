import React, { useCallback, useState } from 'react';
import BoardList from './BoardList';
import BoardEditor from './BoardEditor';
import './Board.css';

const Board = ({
  boardData,
  editorOpen,
  initText,
  onEditClick,
  onInsert,
  onWriteClick,
  onModifyClick,
  onModify,
  onRemoveClick
}) => {
  return (
    <div className="board">
      <BoardList boardData={boardData} onModifyClick={onModifyClick} />
      <button className="btn_edit" onClick={(e) => onEditClick(e)}>
        글쓰기
      </button>
      {editorOpen && (
        <BoardEditor
          initText={initText}
          onWriteClick={onWriteClick}
          onInsert={onInsert}
          onModify={onModify}
          onRemoveClick={onRemoveClick}
        />
      )}
    </div>
  );
};

export default Board;
