import React, { useState, useRef, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import Sidebar from './components/common/sidebar/Sidebar';
import Contents from './components/route/contents/Contents';
import NotFound from './components/route/NotFound';
import DoubleTab from './components/route/doubleTab/DoubleTab';
import Board from './components/route/board/Board';
import { sitemap } from './api/Sitemap.json';
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
  // 생성
  const createdTime = new Date().toString();
  const [boardData, setBoardData] = useState([
    {
      number: 1,
      userName: '해리',
      title: '해리입니다.',
      contents: '팬 여러분 반가워요.',
      date: 'Sun Sep 12 2020 15:10:28 GMT+0900 (대한민국 표준시)'
    },
    {
      number: 2,
      userName: '헤르미온느',
      title: '헤르미온느입니다.',
      contents: '여러분 안녕.',
      date: 'Sun Sep 13 2020 14:10:28 GMT+0900 (대한민국 표준시)'
    },
    {
      number: 3,
      userName: '론위즐리',
      title: '론위즐리입니다.',
      contents: '안녕안녕!.',
      date: 'Sun Sep 13 2020 15:09:28 GMT+0900 (대한민국 표준시)'
    }
  ]);

  const nextNumber = useRef(4);
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

  // 수정
  const [initText, setinitText] = useState({
    number: '',
    userName: '',
    title: '',
    contents: ''
  });
  const [editorOpenToModify, setEditorOpenToModify] = useState(false);

  const onModifyClick = useCallback((e, number, userName, title, contents) => {
    e.preventDefault();
    setinitText({ number, userName, title, contents });
    setEditorOpenToModify(true);
  });

  console.log(initText);
  // const onModify = useCallback(number=> {
  //   setBoardData(boardData.map(data=> data.number === number? ...data))
  // }
  //   );

  // 삭제
  const onRemove = useCallback(
    (number) => {
      setBoardData(boardData.filter((data) => data.number !== number));
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
                    onInsert={onInsert}
                    onRemove={onRemove}
                    editorOpenToModify={editorOpenToModify}
                    initText={initText}
                    onModifyClick={onModifyClick}
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
