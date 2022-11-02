import React, { useState } from "react";
import s from './Header.module.css';
import logo from '../../Assets/logo.png';
import { Button, Modal } from '@mantine/core';
import { SignIn } from "./SignIn/SignIn";
import { UserType } from "../../Utils/DataTypes/UserType";
import { useSelector } from "react-redux";
import { RootState } from "../../Utils/DataTypes/RootState";
import { Avatar } from '@mantine/core';

type headerProp = {
    logoTitle: string
}

const Header = ({ logoTitle }: headerProp) => {
    const user : UserType = useSelector<RootState, UserType>((state) => state._signReducer.user);

    const [currentUser, setCurrentUser] = useState<UserType | null>(null);
    const [isShowSignWin, setIsShowSignWin] = useState<boolean>(false);

    const closeSignWin = () => {
        setIsShowSignWin(false);
        user === null ? setCurrentUser(null) : setCurrentUser(user);
    }

    React.useEffect(() => {
        setCurrentUser(null);
    }, []);

    return(
        <div className={s.outterContainer}>
            <div className={s.logoBloc}>
                <img className={s.logoPng} src={logo} alt="" />
                <span>{logoTitle}</span>
            </div>
            <div className={s.signOutterBlock}>                
                {currentUser === null ? 
                    <Button color="indigo" onClick={() => setIsShowSignWin(true)}>Войти</Button> : 
                    <div className={s.privateRoom}>
                        <Avatar variant="filled" radius="xl" src={null} color="indigo"/>
                        <p>{currentUser.name} {currentUser.surname}</p>
                    </div>
                }
            </div>   
            <Modal
                opened={isShowSignWin}
                onClose={() => closeSignWin()}
                title="">
                <SignIn/>
            </Modal>         
        </div>
    );
}

export default Header;