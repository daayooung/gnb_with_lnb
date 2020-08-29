import React, { useState, useCallback } from 'react';
import './BoardEditor.css';

const BoardEditor = () => {
  //   const onSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       input.current.focus();
  //       if (!value) {
  //         alert('할 일을 입력해주세요.');
  //         return;
  //       }
  //       if (mode === 'insert') {
  //         console.log('insert mode');
  //         onInsert(value);
  //         setValue('');
  //       } else {
  //         console.log('edit mode');
  //         onEdit(initText.id, value);
  //         setValue('');
  //         setMode('insert');
  //       }
  //     },
  //     [value]
  //   );
  //   const onChange = useCallback((e) => {
  //     setValue(e.target.value);
  //   }, []);
  //   return (
  //     <form className="board_form" onSubmit={onSubmit}>
  //       <input placeholder="name" value="name" autocomplete="off"></input>
  //       <input placeholder="title" value="title" autocomplete="off"></input>
  //       <textarea aria-label="With textarea" />
  //       <button type="submit" value="submit">
  //         작성
  //       </button>
  //     </form>
  //   );
};

export default BoardEditor;
