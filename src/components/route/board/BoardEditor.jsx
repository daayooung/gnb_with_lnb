import React, { useState, useCallback } from 'react';
import './BoardEditor.css';
// onSubmit을 누르면 e.preventDefault();로 새로고침 방지, 입력 내용의 value값을 각 setUserName, setContents, setTitle 로 설정한다.
const BoardEditor = ({ onInsert }) => {
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  console.log(contents);

  const onUserNameChange = useCallback(
    (e) => {
      setUserName(e.target.value);
    },
    [userName]
  );

  const onTitleChange = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [title]
  );

  const onContentsChange = useCallback(
    (e) => {
      setContents(e.target.value);
    },
    [contents]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(userName, title, contents);
      setUserName('');
      setTitle('');
      setContents('');
    },
    [onInsert, userName, title, contents]
  );

  return (
    <form className="board_form" onSubmit={onSubmit}>
      <input
        placeholder="작성자"
        value={userName}
        onChange={onUserNameChange}
        autoComplete="off"
      ></input>
      <input
        placeholder="제목"
        value={title}
        onChange={onTitleChange}
        autoComplete="off"
      ></input>
      <textarea
        aria-label="With textarea"
        value={contents}
        onChange={onContentsChange}
      />
      <button type="submit" value="submit">
        작성
      </button>
      <button type="submit" value="delete">
        삭제
      </button>
    </form>
  );
};

export default BoardEditor;
