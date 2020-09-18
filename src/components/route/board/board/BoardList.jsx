import React from 'react';
import BoardItem from './BoardItem';
import './BoardList.css';

const BoardList = ({ boardData, onModifyClick, posts }) => {
  return (
    <ul className="board_list">
      <li className="board_list_sort">
        <ul>
          <li className="list_sort_number">No.</li>
          <li className="list_sort_title">제목</li>
          <li className="list_sort_userName">작성자</li>
          <li className="list_sort_createdTime">작성일</li>
        </ul>
      </li>
      {posts
        .sort((a, b) => {
          return new Date(b.number) - new Date(a.number);
        })
        .map((post, index) => (
          <BoardItem
            boardData={boardData}
            posts={posts}
            post={post}
            index={index}
            key={post.number}
            onModifyClick={onModifyClick}
          />
        ))}
    </ul>
  );
};

export default BoardList;
