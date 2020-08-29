import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import "./Header.css";

const Header = ({ handleClickMenu }) => {
    return (
        <header>
            <Logo />
            <Nav handleClickMenu={handleClickMenu} />
        </header>
    );
};

export default Header;
