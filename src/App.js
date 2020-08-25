import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import Contents from './components/route/Contents';
import NotFound from './components/route/NotFound';
import DoubleTab from './components/route/DoubleTab';
import { sitemap } from './api/Sitemap.json';
import './App.css';

function App() {
  const navInfo = sitemap;

  return (
    <div className="App">
      <div className="wrap">
        <div className="container">
          <Header />
          <section className="section">
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
