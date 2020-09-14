import React, { useState, useCallback } from 'react';
import './BoardEditor.css';
// onSubmit을 누르면 e.preventDefault();로 새로고침 방지, 입력 내용의 value값을 각 setUserName, setContents, setTitle 로 설정한다.
const BoardEditor = ({
  onInsert,
  editorOpen,
  onWritebtnClick,
  onDeletebtnClick
}) => {
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

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
      <label className="label">제목</label>
      <input
        className="title_input"
        value={title}
        onChange={onTitleChange}
        autoComplete="off"
      ></input>
      <label className="label">내용</label>
      <textarea
        className="contents_textarea"
        aria-label="With textarea"
        value={contents}
        onChange={onContentsChange}
      />
      <button
        className="btn btn_write"
        type="submit"
        value="submit"
        onClick={(e) => onWritebtnClick(e)}
      >
        작성
      </button>
      <button
        className="btn btn_delete"
        type="submit"
        value="delete"
        onClick={(e) => onDeletebtnClick(e)}
      >
        삭제
      </button>
    </form>
  );
};

export default BoardEditor;
