import React from 'react';
import BoardItem from './BoardItem';
import './BoardList.css';
// 
const BoardList = ({ boardData, onModifyClick, posts, currentPage, postsPerPage }) => {

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
        .map((post,i) => (
          <BoardItem
            post={post}
            key={post.number}
            onModifyClick={onModifyClick}
            index={boardData.length - ((currentPage-1) * postsPerPage)-i}
          />
        ))}
    </ul>
  );
};

export default BoardList;
