import React, { useState, useCallback, useEffect } from 'react';
import './BoardEditor.css';

const BoardEditor = ({
  initText,
  onWriteClick,
  onInsert,
  onModify,
  onRemoveClick
}) => {
  const number = initText.number;

  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  useEffect(() => {
    setUserName(initText.userName);
    setTitle(initText.title);
    setContents(initText.contents);
  }, [initText]);

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
      <label className="label">작성자</label>
      <input
        value={userName}
        onChange={onUserNameChange}
        autoComplete="off"
      ></input>
      <label className="label">제목</label>
      <input value={title} onChange={onTitleChange} autoComplete="off"></input>
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
        value="write"
        onClick={
          number
            ? (e) => onModify(number, title, contents, onSubmit(e))
            : (e) => onWriteClick(e, onSubmit(e))
        }
      >
        작성
      </button>
      <button
        className="btn btn_delete"
        type="submit"
        value="delete"
        onClick={() => onRemoveClick(number)}
      >
        삭제
      </button>
    </form>
  );
};

export default BoardEditor;
