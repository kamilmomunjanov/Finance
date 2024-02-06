import React from 'react';
import style from "./style.module.css";
import {NavLink} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <nav>
            <ul className={style.list}>
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : null)} to="/">Main</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : null)} to="/stocks">Stocks</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;