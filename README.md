<div className="App">
  <div className="wrap">
    <div className="container">
      <header>
        <h1 className="logo">
          <Link to="/">
            <img/>
          </Link>
        </h1>
        <nav className="nav">
          <ul className="nav-depth1">
            <li className="depth1">
              <NavLink activeClassName="active" to={navDepth1} exact>
                <span>{title}</span>
              </NavLink>
              <ul className="nav_depth2">
                <li key={depth2.path}>
                  <NavLink
                    activeClassName="active"
                    to={navDepth1 + navDepth2}
                    exact
                  >
                    {depth2.pagename}
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <section className="contents"></section>
    </div>
  </div>
</div>;
