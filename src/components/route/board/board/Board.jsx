import React, { useCallback, useState } from 'react';
import BoardList from './BoardList';
import Pagination from '../pagination/Pagination';
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
  onRemoveClick,
  posts,
  postsPerPage,
  paginate
}) => {
  return (
    <div className="board">
      <BoardList
        boardData={boardData}
        onModifyClick={onModifyClick}
        posts={posts}
      />
      <button className="btn_edit" onClick={(e) => onEditClick(e)}>
        글쓰기
      </button>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={boardData.length}
        paginate={paginate}
      />
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
