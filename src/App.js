import React, { useState, useRef, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import Sidebar from './components/common/sidebar/Sidebar';
import Contents from './components/route/contents/Contents';
import NotFound from './components/route/NotFound';
import DoubleTab from './components/route/doubleTab/DoubleTab';
import Board from './components/route/board/Board';
import { sitemap } from './api/Sitemap.json';
import { board_Data } from './api/BoardData.json';
import './App.css';

function App() {
  const navInfo = sitemap;
  // LNB
  const [selectedMenu, setSelectedMenu] = useState('');
  const handleClickMenu = (path) => {
    setSelectedMenu(path);
  };
  console.log(selectedMenu);

  // Board
  // Board 생성
  const [editorOpen, setEditorOpen] = useState(false);
  const [boardData, setBoardData] = useState(board_Data);

  const nextNumber = useRef(boardData.length + 1);
  const createdTime = new Date().toString();
  const [initText, setinitText] = useState({
    number: '',
    userName: '',
    title: '',
    contents: ''
  });

  // Board 작성
  const onInsert = useCallback(
    (userName, title, contents) => {
      const data = {
        number: nextNumber.current,
        userName,
        title,
        contents,
        date: createdTime
      };
      setBoardData(boardData.concat(data));
      nextNumber.current += 1;
    },
    [boardData]
  );

  // ---글쓰기btn---//
  const onEditClick = useCallback((e) => {
    e.preventDefault();
    setEditorOpen(true);
    setinitText({ number: '', userName: '', title: '', contents: '' });
  }, []);

  // ---작성btn---//
  const onWriteClick = useCallback((e) => {
    e.preventDefault();
    setEditorOpen(false);
  }, []);

  // Board 수정
  const onModifyClick = useCallback((e, number, userName, title, contents) => {
    e.preventDefault();
    setinitText({ number, userName, title, contents });
    setEditorOpen(true);
  }, []);

  const onModify = useCallback(
    (number, title, contents) => {
      console.log(number);
      setBoardData(
        boardData.map((data) =>
          data.number === number
            ? { ...data, title: title, contents: contents }
            : data
        )
      );
      setEditorOpen(false);
    },
    [boardData]
  );

  // Board 삭제
  const onRemoveClick = useCallback(
    (number) => {
      if (window.confirm('정말로 삭제 하시겠습니까?')) {
        setBoardData(boardData.filter((data) => data.number !== number));
        setEditorOpen(false);
      } else {
        setEditorOpen(true);
      }
    },
    [boardData]
  );

  return (
    <div className="App">
      <div className="wrap">
        <div className="container">
          {/* <Header /> */}
          <Header handleClickMenu={handleClickMenu} />
          <section className="section">
            {/* {toggleSidebar && <Sidebar />} */}
            {selectedMenu === '/profiles' && <Sidebar />}

            <Switch>
              <Route
                path="/"
                render={({ match, history }) => (
                  <Contents navInfo={navInfo} match={match} history={history} />
                )}
                exact
              />
              <Route
                path="/intro"
                render={({ match, history }) => (
                  <Contents navInfo={navInfo} match={match} history={history} />
                )}
              />
              <Route
                path="/profiles"
                render={({ match, history }) => (
                  <Contents
                    navInfo={navInfo}
                    match={match}
                    history={history}
                    selectedMenu={selectedMenu}
                  />
                )}
              />
              <Route
                path="/series"
                render={({ match, history }) => (
                  <DoubleTab
                    navInfo={navInfo}
                    match={match}
                    history={history}
                  />
                )}
              />
              <Route
                path="/community"
                render={({ match, history }) => (
                  <Board
                    navInfo={navInfo}
                    match={match}
                    history={history}
                    boardData={boardData}
                    editorOpen={editorOpen}
                    initText={initText}
                    onEditClick={onEditClick}
                    onInsert={onInsert}
                    onWriteClick={onWriteClick}
                    onModifyClick={onModifyClick}
                    onModify={onModify}
                    onRemoveClick={onRemoveClick}
                  />
                )}
              />
              <Route
                render={({ location }) => <NotFound location={location} />}
              />
            </Switch>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
