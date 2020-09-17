import React from 'react';
import './BoardItem.css';

const BoardItem = ({ boardData, data, index, onModifyClick }) => {
  const { number, title, userName, contents, date } = data;

  const ElapsedTime = () => {
    const now = new Date();
    const timeValue = new Date(date);

    const betweenTime = Math.floor(
      (now.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  };

  return (
    <li
      className="board_item"
      onClick={(e) => onModifyClick(e, number, userName, title, contents)}
    >
      <ul>
        <li className="item_number">{boardData.length - index}</li>
        <li className="item_title">{title}</li>
        <li className="item_username">{userName}</li>
        <li className="item_createdTime">{ElapsedTime()}</li>
      </ul>
    </li>
  );
};

export default BoardItem;
