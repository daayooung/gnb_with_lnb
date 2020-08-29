import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/header/Header";
import Sidebar from "./components/common/sidebar/Sidebar";
import Contents from "./components/route/Contents";
import NotFound from "./components/route/NotFound";
import DoubleTab from "./components/route/DoubleTab";
// import Board from './components/route/Board';
import { sitemap } from "./api/Sitemap.json";
import "./App.css";

function App() {
    const navInfo = sitemap;
    // const [toggleSidebar, setToggleSidebar] = useState(false);
    //  App.js
    //  1. const [toggleSidebar, setToggleSidebar] = useState(false);

    //  navsub
    //  2. const refDepth2Link = useRef();
    //  3.   useEffect(() => {setToggleSidebar(true);}, [refDepth2Link]);
    //  4. 컴포넌트의 Depth2NavLink에 클릭이벤트가 일어나면 (className에 active가 있으면) setToggleSidebar(true)

    // ===================================================
    const [selectedMenu, setSelectedMenu] = useState("");

    // 메뉴 클릭시
    const handleClickMenu = (path) => {
        setSelectedMenu(path);
    };
    console.log(selectedMenu);
    // ===================================================
    return (
        <div className="App">
            <div className="wrap">
                <div className="container">
                    {/* <Header /> */}
                    <Header handleClickMenu={handleClickMenu} />
                    <section className="section">
                        {/* {toggleSidebar && <Sidebar />} */}
                        {selectedMenu === "/profiles" && <Sidebar />}
                        <Switch>
                            <Route
                                path="/"
                                render={({ match, history }) => (
                                    <Contents
                                        navInfo={navInfo}
                                        match={match}
                                        history={history}
                                    />
                                )}
                                exact
                            />
                            <Route
                                path="/intro"
                                render={({ match, history }) => (
                                    <Contents
                                        navInfo={navInfo}
                                        match={match}
                                        history={history}
                                    />
                                )}
                            />
                            <Route
                                path="/profiles"
                                render={({ match, history }) => (
                                    <Contents
                                        navInfo={navInfo}
                                        match={match}
                                        history={history}
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
                            {/* <Route
                path="/community"
                render={({ match, history }) => (
                  // <Board navInfo={navInfo} match={match} history={history} />
                )}
              /> */}
                            <Route
                                render={({ location }) => (
                                    <NotFound location={location} />
                                )}
                            />
                        </Switch>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
