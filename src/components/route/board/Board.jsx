import React, { useState } from 'react';
import BoardList from './BoardList';
import BoardEditor from './BoardEditor';
import './Board.css';

const Board = ({ boardData, onInsert }) => {
  const [editorOpen, setEditorOpen] = useState(false);

  const onEditbtnClick = (e) => {
    e.preventDefault();
    setEditorOpen(true);
  };

  const onWritebtnClick = (e) => {
    e.preventDefault();
    setEditorOpen(false);
  };

  const onDeletebtnClick = (e) => {
    e.preventDefault();
    window.confirm('정말로 삭제 하시겠습니까?')
      ? setEditorOpen(false)
      : setEditorOpen(true);
  };

  return (
    <div className="board">
      <BoardList boardData={boardData} />
      <button className="btn_edit" onClick={(e) => onEditbtnClick(e)}>
        글쓰기
      </button>
      {editorOpen && (
        <BoardEditor
          onWritebtnClick={onWritebtnClick}
          onDeletebtnClick={onDeletebtnClick}
          onInsert={onInsert}
        />
      )}
    </div>
  );
};

export default Board;
