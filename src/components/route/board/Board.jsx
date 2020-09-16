import React, { useCallback, useState } from 'react';
import BoardList from './BoardList';
import BoardEditor from './BoardEditor';
import './Board.css';

const Board = ({
  boardData,
  onInsert,
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

  const onDeletebtnClick = useCallback((e) => {
    e.preventDefault();
    window.confirm('정말로 삭제 하시겠습니까?')
      ? setEditorOpen(false)
      : setEditorOpen(true);
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
          onDeletebtnClick={onDeletebtnClick}
          onInsert={onInsert}
          onRemove={onRemove}
          initText={initText}
        />
      )}
    </div>
  );
};

export default Board;
