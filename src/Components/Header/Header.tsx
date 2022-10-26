import React, { useState } from "react";
import s from './Header.module.css';
import logo from '../../Assets/logo.png';
import { Button } from '@mantine/core';

type headerProp = {
    logoTitle: string
}

const Header = ({ logoTitle }: headerProp) => {

    const [name, setName] = useState<string | null>('Empty');

    React.useEffect(() => {
        setName(localStorage.getItem('name'));
    }, []);

    return(
        <div className={s.outterContainer}>
            <div className={s.logoBloc}>
                <img className={s.logoPng} src={logo} alt="" />
                <span>{logoTitle}</span>
            </div>
            <div className={s.signOutterBlock}>
                {name === null ? <Button color="indigo">Не авторизован</Button> : <a href="#">{name}</a>}
            </div>
        </div>
    );
}

export default Header;