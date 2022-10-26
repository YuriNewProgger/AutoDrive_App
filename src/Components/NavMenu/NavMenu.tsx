import React from "react";
import s from './NavMenu.module.css';

const Nav = () => {
    return(
        <div className={s.outterContainer}>
            <ul className={s.listUl}>
                <li>Главная</li>
                <li>Каталог</li>
                <li>Контакты</li>
                <li>О нас</li>
            </ul>
        </div>
    );
}

export default Nav;