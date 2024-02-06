import React from 'react';
import style from "./style.module.css";
import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <header className={style.header}>
            <Logo/>
            <HeaderMenu/>
        </header>
    );
};

export default Header;