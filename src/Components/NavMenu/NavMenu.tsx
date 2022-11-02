import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavMenu.module.css';

const Nav = () => {
    return(
        <div className={s.outterContainer}>
            <ul className={s.listUl}>
                <li>
                    <NavLink to="/*">Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/Catalog">Каталог</NavLink>
                </li>
                <li>
                    <NavLink to="/Contacts">Контакты</NavLink>
                </li>
                <li>
                    <NavLink to="/About">О нас</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Nav;