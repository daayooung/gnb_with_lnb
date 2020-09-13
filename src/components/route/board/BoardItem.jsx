import React from 'react';
import './BoardItem.css';

const BoardItem = ({ data }) => {
  const { number, title, userName, date } = data;

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
    <div className="board_item">
      <p className="item_number">{number}</p>
      <p className="item_title">{title}</p>
      <p className="item_username">{userName}</p>
      <p className="item_createdTime">{ElapsedTime()}</p>
      <hr />
    </div>
  );
};

export default BoardItem;
