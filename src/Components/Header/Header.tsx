import React, { useState } from "react";
import s from './Header.module.css';
import logo from '../../Assets/logo.png';
import { Button, Modal } from '@mantine/core';
import { SignIn } from "./SignIn/SignIn";

type headerProp = {
    logoTitle: string
}

const Header = ({ logoTitle }: headerProp) => {

    const [name, setName] = useState<string | null>('Empty');
    const [surname, setSurName] = useState<string | null>('Empty');
    const [isShowSignWin, setIsShowSignWin] = useState<boolean>(false);

    React.useEffect(() => {
        setName(localStorage.getItem('name'));
        setSurName(localStorage.getItem('surname'));
    }, []);

    return(
        <div className={s.outterContainer}>
            <div className={s.logoBloc}>
                <img className={s.logoPng} src={logo} alt="" />
                <span>{logoTitle}</span>
            </div>
            <div className={s.signOutterBlock}>
                {name === null ? <Button color="indigo" onClick={() => setIsShowSignWin(true)}>Войти</Button> : <span>{name} {surname}</span>}
            </div>   
            <Modal
                opened={isShowSignWin}
                onClose={() => setIsShowSignWin(false)}
                title="">
                {/* Modal content */}
                <SignIn/>
            </Modal>         
        </div>
    );
}

export default Header;