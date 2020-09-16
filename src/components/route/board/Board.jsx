import React, { useCallback, useState } from 'react';
import BoardList from './BoardList';
import BoardEditor from './BoardEditor';
import './Board.css';

const Board = ({
  boardData,
  onInsert,
  onModify,
  onRemove,
  initText,
  editorOpenToModify,
  onModifyClick
}) => {
  const [editorOpen, setEditorOpen] = useState(false);

  const onEditbtnClick = useCallback((e) => {
    e.preventDefault();
    setEditorOpen(true);
  }, []);

  const onWritebtnClick = useCallback((e) => {
    e.preventDefault();
    setEditorOpen(false);
  }, []);

  return (
    <div className="board">
      <BoardList boardData={boardData} onModifyClick={onModifyClick} />
      <button className="btn_edit" onClick={(e) => onEditbtnClick(e)}>
        글쓰기
      </button>
      {(editorOpen || editorOpenToModify) && (
        <BoardEditor
          onWritebtnClick={onWritebtnClick}
          onInsert={onInsert}
          initText={initText}
          onModify={onModify}
          onRemove={onRemove}
        />
      )}
    </div>
  );
};

export default Board;
