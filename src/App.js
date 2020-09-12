import React, { useState } from 'react';
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
  const [selectedMenu, setSelectedMenu] = useState('');

  // 메뉴 클릭시
  const handleClickMenu = (path) => {
    setSelectedMenu(path);
  };
  console.log(selectedMenu);

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
                  <Contents navInfo={navInfo} match={match} history={history} />
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
                  <Board navInfo={navInfo} match={match} history={history} />
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
